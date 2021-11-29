export function validate(name) {
  if (name === '' || name === null) return false

  const n = name.trim().split(' ')

  if (n.length === 1) return false
  if (name.length < 9) return false
  if (n.length > 1) return n[0].length >= 3 && n[n.length - 1].length >= 3

  return true
}

export default {
  validate
};
