module.exports.uppercase = (uniqueName) => {
    const regex = /[a-z]{1,}/
    const found = uniqueName.match(regex)
    console.log(found)
    if (found === null || found.length === 0) return false
    else return true
}
