import { validate } from './index.js'

test('is valid cpf', () => {
  expect(validate('11657068730')).toBe(true)
})

test('is invalid cpf', () => {
  expect(validate('00000000000')).toBe(false)
})

