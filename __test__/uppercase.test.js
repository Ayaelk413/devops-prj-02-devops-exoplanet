const { uppercase } = require('../utils/uppercase')

describe('app tests - uppercase', () => {
    test('should return true as there is a word in capital letter', () => {
        expect(uppercase('TRAPPISTE')).toBe(true)
    })
})

// test('uppercase', () => {
//     expect(uppercase('TEST')).toBe(true)
// })

// test('uppercase', () => {
//     expect(uppercase('Test')).toBe(false)
// })
// test('uppercase', () => {
//     expect(uppercase('teST')).toBe(false)
// })

// test('uppercase', () => {
//   expect(uppercase('')).toBe(false)
// })

// /* describe('test suite utils', () => {
//   it('false checkUniqueName', () => {
//     expect(checkUnqiueName('test++++')).toBe(false)
//   })
