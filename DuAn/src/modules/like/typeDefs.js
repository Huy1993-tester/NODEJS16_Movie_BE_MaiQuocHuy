const { gql } = require("apollo-server-express");

const typeDefs = gql(`
    type Like {
        like:Boolean
    }
    extend type Mutation{
       newLike( like:Boolean,
        user_id:Int,
        movie_id:Int):Like
    }
`);

module.exports = {
  typeDefs,
};
