export default (el, strings = '', keys = []) => {
  if (!el || !strings) return ''

  const terms = strings.toLowerCase().split(' ')

  return keys.some(key => {
    const text = el[key].toLowerCase()

    return terms.some(term => text.includes(term))
  })
}
