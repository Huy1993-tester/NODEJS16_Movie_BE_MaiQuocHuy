const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");

const movieModule = {
  resolvers,
  typeDefs,
};

module.exports = { movieModule };
