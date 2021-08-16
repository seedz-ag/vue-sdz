// https://repl.it/@viniazvd/isValid

export default value => {
  if (Array.isArray(value)) return !!value.length
  if (typeof value === 'object') return !!Object.keys(value).length
  if (typeof value === 'string') return !!value.length
  if (typeof value === 'number') return !!value

  return !!value
}
