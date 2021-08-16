export default (el, strings = '', keys = []) => {
  const terms = strings.toLowerCase().split(' ')

  return keys.some(key => {
    const text = el[key].toLowerCase()

    return terms.some(term => text.includes(term))
  })
}
