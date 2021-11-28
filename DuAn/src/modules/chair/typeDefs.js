const { gql } = require("apollo-server-express");

const typeDefs = gql(`
type Chair{
    numChair: String,
 }
extend type Mutation{
   newChair(
    numChair: String,
   ):Chair
 }
`);

module.exports = {
  typeDefs,
};
