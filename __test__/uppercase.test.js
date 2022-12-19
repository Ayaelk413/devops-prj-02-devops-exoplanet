const { uppercase } = require('../utils/utils')

test('uppercase', () => {
    expect(uppercase('test')).toBe(false)
})

test('uppercase', () => {
    expect(uppercase('TEST')).toBe(true)
})

test('uppercase', () => {
    expect(uppercase('Test')).toBe(false)
})
test('uppercase', () => {
    expect(uppercase('teST')).toBe(false)
})

test('uppercase', () => {
  expect(uppercase('')).toBe(false)
})

/* describe('test suite utils', () => {
  it('false checkUniqueName', () => {
    expect(checkUnqiueName('test++++')).toBe(false)
  })
}) */
