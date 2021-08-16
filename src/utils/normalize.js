function normalizeDiacritics (str) {
  if (!str) return ''

  return str
    .normalize('NFKD')
    .replace(/[\u0080-\uF8FF]/g, '')
    .toLowerCase()
}

export default normalizeDiacritics
