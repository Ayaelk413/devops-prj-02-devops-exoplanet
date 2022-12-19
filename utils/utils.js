// add uppercase function

module.exports.uppercase = (uniqueName) => {
  const regex = /[A-Z]/;
  const found = uniqueName.match(regex);
  console.log(found);
  if (found === null || found.length === 0) return false;
  else return true;
};
