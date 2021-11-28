const { Chair } = require("../../models");

const resolvers = {
  Mutation: {
    newChair: async (_, args) => {
      const result = await Chair.create(args);
      return result;
    },
  },
};

module.exports = { resolvers };
