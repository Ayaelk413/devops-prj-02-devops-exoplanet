const { uppercase } = require('../utils/uppercase')

describe('app tests - uppercase', () => {
    
    test('should return true as there are only uppercase characters', () => {
        expect(uppercase('TRAPPISTE')).toBe(true)
    })

    test('should return false as there is a lowercase character', () => {
        expect(uppercase('TRAPPiSTE')).toBe(false)
    })

    test('should return false as there are multiple lowercase characters', () => {
        expect(uppercase('Trappist')).toBe(false)
    })

    test('should return false as there are no characters', () => {
        expect(uppercase('')).toBe(false)
    })

    test('should return false as there are only lowercase characters', () => {
        expect(uppercase('trappist')).toBe(false)
    })

})