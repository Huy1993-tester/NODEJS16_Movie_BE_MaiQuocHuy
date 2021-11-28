const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const cinemaModule = {
  resolvers,
  typeDefs,
};

module.exports = {cinemaModule};
