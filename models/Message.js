
const messagesTable = [];

module.exports.list = () => messagesTable;

module.exports.save = (data) => {
  messagesTable.push(data);
};

