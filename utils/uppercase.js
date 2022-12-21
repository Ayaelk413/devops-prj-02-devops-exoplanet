module.exports.uppercase = (uniqueName) => {
    if (!uniqueName) return false
    const regex = /[a-z]{1,}/
    const found = uniqueName.match(regex)
    return found === null
}
