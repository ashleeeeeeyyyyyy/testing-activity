import { multiplyNumbers } from '../multiplyNumbers'

test('Check if multiplyNumbers displays correct value', () => {
  expect(multiplyNumbers(2, 5)).toEqual(10)
})
