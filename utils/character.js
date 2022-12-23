module.exports.character = (uniqueName) => {
    if (!uniqueName) return false
    const regex = /[[_@*+!`'" ?^${}§:;,#~&²=€£%()|[\]/\\]/
    const found = uniqueName.match(regex)
    return !found
}
