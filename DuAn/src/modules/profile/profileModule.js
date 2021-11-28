const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");

const profileModule = {
  resolvers,
  typeDefs,
};

module.exports = {
  profileModule,
};
