const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const chairModule = {
  resolvers,
  typeDefs,
};

module.exports = {chairModule};
