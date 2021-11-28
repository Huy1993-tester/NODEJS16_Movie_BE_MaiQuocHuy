const { gql } = require("apollo-server-express");

const typeDefs = gql(`
type Token{
 token:String
}
type Message{
  success: String,
}
input createInput {
  userName: String,
  email: String!,
  password: String,
  role:String
}

extend type Mutation{
 newUser(
   input : createInput
 ):Message,
 Sign(email:String,password:String):Token
}
`);

module.exports = {
  typeDefs,
};
