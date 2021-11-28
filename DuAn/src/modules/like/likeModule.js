const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");

const likeModule = {
  resolvers,
  typeDefs,
};

module.exports = {
  likeModule,
};
