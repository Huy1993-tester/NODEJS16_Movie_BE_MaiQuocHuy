const { gql } = require("apollo-server-express");

const typeDefs = gql(`
    type Cmt {
        comment: String
    }
    extend type Mutation {
        newComment(comment: String,
            user_id:Int,
            movie_id:Int):Cmt
    }
`);

module.exports = {
  typeDefs,
};
