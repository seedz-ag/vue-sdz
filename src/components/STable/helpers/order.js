function isNumber (a, b) {
  return typeof (a && b) === 'number'
}

const toggleOrder = (row, icon) => (a, b) => {
  if (isNumber(a[row], b[row])) {
    return icon === '▲' ? b[row] - a[row] : a[row] - b[row]
  }

  return icon === '▲' ? a[row] < b[row] : a[row] > b[row]
}

export default toggleOrder
