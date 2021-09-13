function getWords (query) {
  return query.trim().split(' ')
}

function getMatches (word, words) {
  return word
    ? words.toLowerCase().split(word.toLowerCase()).length - 1
    : 0
}

function findByInclusive (xs = [], query = '', key = '') {
  const words = getWords(query)

  return xs.filter(option => words.every(word => getMatches(word, (option[key] || ''))))
}

export default findByInclusive
