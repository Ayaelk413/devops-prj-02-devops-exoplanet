const { character } = require('../utils/character');

describe("app tests chars - character", () => {
    test('should return true as the character is correct', () => {
        expect(character('test')).toBe(true);
    });
    test('should return false as there is special character', () => {
        expect(character('te/st@')).toBe(false);
    });
    
    test('should return true as the special character _ is accepted', () => {
        expect(character('Te-st')).toBe(true);
    });
    test('should return true as the special character . is accepted', () => {
        expect(character('te.St')).toBe(true);
    });
    
    test('should return false as the parameter is empty', () => {
        expect(character('')).toBe(false);
    });
});
