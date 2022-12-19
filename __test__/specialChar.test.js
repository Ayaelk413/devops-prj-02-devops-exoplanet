const { character } = require('../utils/utils')

test('character', () => {
    expect(character('test')).toBe(true)
})

test('character', () => {
    expect(character('te/st@')).toBe(false)
})

test('character', () => {
    expect(character('Te-st')).toBe(true)
})
test('character', () => {
    expect(character('te_St')).toBe(true)
})

test('character', () => {
    expect(character('')).toBe(false)
})


