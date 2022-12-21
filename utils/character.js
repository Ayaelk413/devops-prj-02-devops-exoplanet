module.exports.character = (uniqueName) => {
    if(!uniqueName) return false;
    const regex = /\W+\s/g;
    const found = uniqueName.match(regex);
    console.log(found);
    if (found === null || found.length === 0) return true;
    else return false;
}
