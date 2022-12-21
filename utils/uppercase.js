module.exports.uppercase = (uniqueName) => {
    const regex = /[a-z]{1,}/
    const found = uniqueName.match(regex)
    return found===null
}
