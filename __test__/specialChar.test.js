const { character } = require('../utils/character');

describe("app tests specialchar - character", () => {
    
    test('should return false as there are special character', () => {
        const result = character('TRAPPISTE$****01****-00') ;
        expect(result).toBe(false);
    });
    
    test('should return false as there are only special characters', () => { 
        const result = character('/_@*+!`\'" ?^${}§:;,#~&²=€£%()[]') ;
        expect(result).toBe(false);
    });

    test('should return true as the special character - is accepted', () => {
        const result = character('TRAPPISTE01-00') ;
        expect(result).toBe(true);
    });

    test('should return true as the special character . is accepted', () => {
        const result = character('TRAPPISTE.01.00');
        expect(result).toBe(true);
    });

    test('should return false as there is a white space', () => {
        const result = character(' ');
        expect(result).toBe(false);
    });
    
    test('should return false as the parameter is empty', () => {
        const result = character('');
        expect(result).toBe(false);
    });
});
