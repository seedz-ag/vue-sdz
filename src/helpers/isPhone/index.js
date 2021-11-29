export function validate(phone) {
  if (phone === '99999999999'
    || phone === '88888888888'
    || phone === '77777777777'
    || phone === '66666666666'
    || phone === '55555555555'
    || phone === '44444444444'
    || phone === '33333333333'
    || phone === '22222222222'
    || phone === '11111111111'
    || phone === '00000000000'
  ) return false

  if (phone?.length === 11) return true

  return false
}

export default {
  validate
}
