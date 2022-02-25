const isNumber = (a, b) => typeof (a && b) === 'number'

export default (row, icon) => (a, b) => {
  if (isNumber(a[row], b[row])) {
    return icon === 'increase' ? b[row] - a[row] : a[row] - b[row]
  }

  if (icon === 'increase') {
    if (a[row] > b[row]) return 1
    if (a[row] < b[row]) return -1
    return 0
  }

  if (a[row] < b[row]) return 1
  if (a[row] > b[row]) return -1
  return 0
}
