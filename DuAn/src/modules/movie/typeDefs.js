const { gql } = require("apollo-server-express");

const typeDefs = gql(`
type Movie{
   flim: String,
   trailer: String,
   decription: String,
   evaluate: Int,
   active: Boolean,
 }
extend type Mutation{
   newMovie(
     flim: String,
     trailer: String,
     decription: String,
     evaluate: Int,
     active: Boolean,
   ):Movie
 }
`);

module.exports = {
  typeDefs,
};
