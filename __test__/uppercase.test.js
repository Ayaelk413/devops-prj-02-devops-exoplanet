const { uppercase } = require('../utils/uppercase')

describe('app tests - uppercase', () => {
    test('should return true as there are only uppercase characters', () => {
        expect(uppercase('TRAPPISTE')).toBe(true)
    })

    test('should return false as there is a lowercase character', () => {
        expect(uppercase('TRAPPiSTE')).toBe(false)
    })

    test('should return false as there are multiple lowercase characters', () => {
        expect(uppercase('Test')).toBe(false)
    })

    test('should return false as there are no characters', () => {
        expect(uppercase('')).toBe(false)
    })

})




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
