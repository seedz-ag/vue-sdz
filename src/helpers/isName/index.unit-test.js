import { validate } from './index.js'

test('is valid name', () => {
  expect(validate('Seu madruga')).toBe(true)
  expect(validate('Madruguinha da Silva')).toBe(true)
})

test('is invalid name', () => {
  expect(validate('Seu M.')).toBe(false)
  expect(validate('SeuMadruga')).toBe(false)
})

