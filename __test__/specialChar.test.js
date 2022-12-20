const { character } = require('../utils/character')

test('character', () => {
    expect(character('test')).toBe(true)
})

test('character', () => {
    expect(character('te/s-t@')).toBe(false)
})

test('character', () => {
    expect(character('Te_st')).toBe(true)
})
test('character', () => {
    expect(character('te.St')).toBe(true)
})

test('character', () => {
    expect(character('')).toBe(false)
})


