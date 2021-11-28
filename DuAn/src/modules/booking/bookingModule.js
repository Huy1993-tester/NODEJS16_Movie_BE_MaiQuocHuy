const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const bookingModule = {
  resolvers,
  typeDefs,
};

module.exports = {
  bookingModule,
};
