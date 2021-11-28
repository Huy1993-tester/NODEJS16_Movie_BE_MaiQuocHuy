const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");

const CommentModule = {
  resolvers,
  typeDefs,
};

module.exports = {
  CommentModule,
};
