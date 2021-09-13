import { normalizeDiacritics } from '@modules/normalize'

function makeLowerCaseString (data) {
  return data ? data.toString().toLowerCase() : ''
}

function getWords (query) {
  return makeLowerCaseString(query).split(' ')
    .filter(v => !!v)
}

function getValidKeys (xs, keys) {
  return keys
    .filter(key => xs.some(x => Object.keys(x).includes(key)))
}

function getMatches (words, word) {
  const normalizedWord = normalizeDiacritics(word)

  return words
    .map(str => normalizeDiacritics(str))
    .filter(x => normalizedWord.includes(normalizeDiacritics(x))).length
}

function calcHits (validKeys, data, words) {
  return validKeys
    .map(keys => makeLowerCaseString(data[keys]))
    .reduce((acc, word, index) => {
      acc[index] = getMatches(words, word)
      return acc
    }, [])
}

function getHits (cache, data, validKeys, words) {
  return cache.get(data) ||
    cache
      .set(data, calcHits(validKeys, data, words))
      .get(data)
}

export function findByExclusive (xs = [], query = '', keys = [], highestFilter = true) {
  if (!query) return xs

  const words = getWords(query)
  const validKeys = getValidKeys(xs, keys)
  const cache = new WeakMap()
  const result = xs.map(data => {
    const matchesArray = getHits(cache, data, validKeys, words)
    return {
      ...data,
      matchesArray,
      matches: matchesArray.reduce((a, v) => a + v, 0)
    }
  })

  if (highestFilter) {
    const highestHit = Math.max(...result.map(data => data.matches))

    return result.filter(({ matches }) => highestHit === matches)
  }

  return result
}

export function mapMatches (xs = [], query = '', keys = []) {
  if (!query) return xs

  const words = getWords(query)
  const validKeys = getValidKeys(xs, keys)
  const cache = new WeakMap()

  return xs.map(data => ({
    ...data,
    matches: getHits(cache, data, validKeys, words)
      .reduce((a, v) => a + v, 0)
  }))
}
