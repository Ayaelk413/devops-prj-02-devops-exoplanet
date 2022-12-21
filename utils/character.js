module.exports.character = (uniqueName) => {
    if(!uniqueName) return false;
    const regex = /[a-z]{1,}|[[_@*+!`'" ?^${}()|[\]\\]/g;
    const found = uniqueName.match(regex);
    return !found;
}
