import { validate } from './index.js'

test('is valid phone', () => {
  expect(validate('21984984418')).toBe(true)
})

test('is invalid phone', () => {
  expect(validate('88888888888')).toBe(false)
  expect(validate('')).toBe(false)
})

