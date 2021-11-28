const { Movie} = require("../../models");

const resolvers = {
    Mutation: {
    newMovie: async (parent, args) => {
      const results = args;
      await Movie.create(results);
      return results;
    },
  },
};

module.exports = {
  resolvers,
};
