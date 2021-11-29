function digit(numbers) {
  let index = 2;

  const sum = [...numbers].reverse().reduce((buffer, number) => {
    // eslint-disable-next-line no-param-reassign
    buffer += Number(number) * index;
    index = index === 9 ? 2 : index + 1;
    return buffer;
  }, 0);

  const mod = sum % 11;

  return mod < 2 ? 0 : 11 - mod;
}

export function validate(cnpj) {
  const STRICT_STRIP_REGEX = /[\\.\\/\\-]/g;
  // Remove period, slash and dash characters from CNPJ
  const cleaned = cnpj.toString().replace(STRICT_STRIP_REGEX, '');

  if (!cleaned || cleaned.length !== 14 || /^(\d)\1+$/.test(cleaned)
  ) {
    return false;
  }

  let registration = cleaned.substr(0, 12);
  registration += digit(registration);
  registration += digit(registration);

  return registration.substr(-2) === cleaned.substr(-2);
}

export function format(cnpj) {
  return (
    cnpj
      .toString()
    // Remove non digit characters
      .replace(/[^\d]/g, '')
    // Apply formatting
      .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
  );
}

export function generate() {
  let cnpj = '';
  let i = 12;

  // eslint-disable-next-line no-cond-assign
  while (i -= 1) {
    cnpj += Math.floor(Math.random() * 9);
  }

  cnpj += digit(cnpj);
  cnpj += digit(cnpj);

  return format(cnpj);
}

export default {
  digit,
  format,
  validate,
  generate,
};
