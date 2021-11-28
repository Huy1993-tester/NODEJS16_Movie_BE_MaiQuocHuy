const { Authentication} = require("../../middlewares/auth");
const { CreateToken } = require("../../utils/createToken");
const { VerifyPassword, EncodePassword } = require("../../utils/hash");
const { User} = require("../../models");
const resolvers = {
  Mutation: {
    newUser: async (parent, args) => {
      try {
        const results = args;
        const hashpass = await EncodePassword(results.input.password);
        results.input.password = hashpass;
        await User.create(results.input);
        return {success:"Thành công"};
      } catch (error) {
        throw new Error(error);
      }
    },
    Sign: async (parent, args) => {
      try {
        let person = await User.findAll({ where: { email: args.email } });
        if (person[0] === undefined) {
          throw new Error("User ko tồn tại");
        } else {
          const ischeck = await VerifyPassword(args.password, person);
          if (ischeck) {
            const token = CreateToken(person[0]);
            const decode = Authentication(token);
            person.token = token;
            person.role = decode.role;
            return person;
          } else {
            throw new Error("Sai pass");
          }
        }
      } catch (error) {
        return error;
      }
    },
  },
};

module.exports = {
  resolvers,
};
