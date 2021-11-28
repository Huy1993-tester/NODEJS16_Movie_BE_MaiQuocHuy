const { async } = require("rxjs");
const { sequelize } = require("../../models");

const resolvers = {
  Query: {
    userLikeComment: async (_, args) => {
      const query = `SELECT * FROM Users U JOIN Tickets T on U.id = T.user_id JOIN Movies M on M.id = T.movie_id JOIN Likes L on L.user_id = T.user_id JOIN Comments C on C.user_id = T.user_id JOIN Profiles P on T.user_id = P.user_id `;
      const [result, metadata] = await sequelize.query(query);
      return result;
    },
    userDetail: async (_, args) => {
      const query = `SELECT * FROM Users U JOIN Profiles P on P.user_id = U.id WHERE U.id = ${args.userId}`;
      const [result, metadata] = await sequelize.query(query);
      return result;
    },
    pageUsers:  async (_,args)=>{
      const query = `SELECT * FROM Users U join Profiles P on U.id = P.user_id limit ${args.limit} offset ${(args.offset - 1)*args.limit}`;
      const [result, metadata] = await sequelize.query(query);
      return result;
    },
    pageMovie: async(_,args)=>{
      const query = `SELECT * FROM Movies M limit ${args.limit} offset ${(args.offset - 1)*args.limit}`;
      const [result, metadata] = await sequelize.query(query);
      return result;
    }
  },
};

module.exports = {
  resolvers,
};
