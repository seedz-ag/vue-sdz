import { validate } from './index.js'

test('is valid email', () => {
  expect(validate('teste.email@gmail.com')).toBe(true)
})

test('is invalid email', () => {
  expect(validate('@gmail.com')).toBe(false)
  expect(validate('teste.com')).toBe(false)
  expect(validate('teste.gmail.com')).toBe(false)
})

