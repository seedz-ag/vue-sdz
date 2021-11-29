import { validate } from './index.js'

test('is valid cnpj', () => {
  expect(validate('51864951000140')).toBe(true)
  expect(validate('51.864.951/0001-40')).toBe(true)
})

test('is invalid cnpj', () => {
  expect(validate('51864951000100')).toBe(false)
  expect(validate('51.864.951/0001-00')).toBe(false)
})

