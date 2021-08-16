// export default (fn, wait = 0, time) =>
//   (...args) =>
//     clearTimeout(time, time = setTimeout(() => fn(...args), wait))

export default (func, wait = 300, immediate) => {
  let timeout
  let result

  return function (...args) {
    const later = () => {
      timeout = null
      if (!immediate) result = func.apply(this, args)
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)

    if (callNow) result = func.apply(this, args)

    return result
  }
}
