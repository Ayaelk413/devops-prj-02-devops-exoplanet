module.exports.character = (uniqueName) => {
  const regex = /\W+\s/g;
  const found = uniqueName.match(regex);
  console.log(found);
  if (found === null || found.length === 0) return true;
  else return false;
};
