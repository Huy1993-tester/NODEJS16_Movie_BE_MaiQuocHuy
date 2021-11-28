const { gql } = require("apollo-server-express");

const typeDefs = gql(`
    type MessageProfile {
     success: String
    }
    type File {
        fileUrl: String!
       }
    extend type Mutation {
        newInfoUser(brithday: String,
            phone: String,
            social: String,
            user_id: Int):MessageProfile,
        singleUpload:File
    }
`);

module.exports = {
  typeDefs,
};
