const { Cinema } = require("../../models");

const resolvers = {
  Mutation: {
    newRap: async (_, args) => {
      const result = await Cinema.create(args);
      return result;
    },
  },
};

module.exports = { resolvers };
