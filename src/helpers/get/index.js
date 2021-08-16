/**
 * Check value's constructor name.
 * @param {*} value
 * @param {string} constructor
 * @returns {boolean}
 */

const is = (value, constructor) => {
  return Object.prototype.toString.call(value) === `[object ${constructor}]`
}

/**
 * Checks if value is not null
 * @param {*} value
 * @returns {boolean}
 */
const defaultValidator = (value) => !is(value, 'Null')

const DELIMITER = '.'

/**
 * Spreads path into fields list.
 * @param {string} path
 * @returns {Array.<string>}
 */
const getProperties = (path) => is(path, 'String') ? path.split(DELIMITER) : []

/**
 * Deep object.
 * @typedef {Object.<string, (number|boolean|string|Deep)>} Deep
 */

/**
 * Checks if a propety is reachable.
 * @param {Deep} object
 * @param {string} property
 * @returns {(number|boolean|string|null)}
 */
const getValue = (object, property) => {
  const isKeyed = is(object, 'Object') || is(object, 'Module')
  const isReachable =
    (isKeyed && object.hasOwnProperty(property)) ||
    (Array.isArray(object) && object[property] != null)

  const value = isReachable ? object[property] : null

  return value
}

/**
 * Get value from object path.
 * @param {Deep} object
 * @param {(string|Array.<string>)} path
 * @returns {(number|boolean|string|null)}
 */
export const get = (object, path) => {
  const properties = getProperties(path)
  const value = properties.reduce(getValue, object)

  return value
}

/**
 * Get value from first object.
 * @param {string} name
 * @param {Deep[]} objects
 * @param {function(*):boolean} [validate]
 * @returns {*}
 */
export const getProperty = (name, objects, validate = defaultValidator) => {
  const properties = objects.map((object) => get(object, name))
  const property = properties.find((property) => validate(property))

  return property
}

export default get
