const { gql } = require("apollo-server-express");

const typeDefs = gql(`

 type Mess{
   message:String
 }
extend type Mutation{
   newBooking(
    startTime:String,
    endTime:String,
    price: Int,
    payMethod:String,
    chairNum:String,
    user_id: Int,
    movie_id: Int,
    rap_id:Int,
   ):Mess
 }
`);

module.exports = {
  typeDefs,
};
