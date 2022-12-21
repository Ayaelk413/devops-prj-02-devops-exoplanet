const { character } = require('../utils/character');

describe("app tests chars - character", () => {
    
    test('should return false as there is special character', () => {
        expect(character('TRAPPISTE$****01****-00/_@*+!`\'" ?^${}§:;,#~&²=€£%()[]')).toBe(false);
    });
    
    test('should return true as the special character _ is accepted', () => {
        expect(character('TRAPPISTE01-00')).toBe(true);
    });

    test('should return true as the special character . is accepted', () => {
        expect(character('TRAPPISTE.01.00')).toBe(true);
    });

    test('should return false as there is a white space', () => {
        expect(character(' ')).toBe(false);
    });
    
    test('should return false as the parameter is empty', () => {
        expect(character('')).toBe(false);
    });
});
