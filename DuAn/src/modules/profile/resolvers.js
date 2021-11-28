const { Profile } = require("../../models");
const { Authentication } = require("../../middlewares/auth");
const resolvers = {
  Mutation: {
    newInfoUser: async (_, args) => {
      const result = args;
      await Profile.create(result);
      return {success: "Thành công"};
    },
    singleUpload: async (parent, args, context, info) => {
      const { filename } = context.file;
      const { host } = context;
      const token = context.authScope;
      const decode = await Authentication(token);
      const user_id = decode.id;
      const avatar = `https://${host}/images/${filename}`;
      await Profile.update(
        { avatar },
        {
          where: {
            user_id,
          },
        }
      );
      return { fileUrl: avatar };
    },
  },
};

module.exports = {
  resolvers,
};
