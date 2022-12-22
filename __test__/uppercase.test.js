const { uppercase } = require('../utils/uppercase')

describe('app tests - uppercase', () => {
    
    test('should return true as there are only uppercase characters', () => {
        const result = uppercase('TRAPPISTE');
        expect(result).toBe(true)
    })

    test('should return false as there is a lowercase character', () => {
        const result = uppercase('TRAPPiSTE');
        expect(result).toBe(false)
    })

    test('should return false as there are multiple lowercase characters', () => {
        const result = uppercase('Trappist');
        expect(result).toBe(false)
    })

    test('should return false as there are no characters', () => {
        const result = uppercase('');
        expect(result).toBe(false)
    })

    test('should return false as there are only lowercase characters', () => {
        const result = uppercase('trappist');
        expect(result).toBe(false)
    })

})