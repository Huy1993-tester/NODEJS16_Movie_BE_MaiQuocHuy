const { Comment, sequelize } = require("../../models");
const resolvers = {
  Query: {
    queryCommentLike: async (_, args) => {
      const query =
        "SELECT * FROM Comments C JOIN Users U on C.user_id = U.id JOIN Movies M on C.movie_id = M.id";
      const [result, metadata] = await sequelize.query(query);
      return result[0];
    },
  },
  Mutation: {
    newComment: async (_, args) => {
      await Comment.create(args);
      return args;
    },
  },
};

module.exports = {
  resolvers,
};
