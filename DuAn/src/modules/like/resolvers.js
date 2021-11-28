const { Like } = require("../../models/");

const resolvers = {
  Mutation: {
    newLike: async (_, args) => {
      await Like.create(args);
      return args;
    },
  },
};

module.exports = {
  resolvers,
};
