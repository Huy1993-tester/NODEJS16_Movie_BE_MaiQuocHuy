const { gql } = require("apollo-server-express");

const typeDefs = gql(`
type QUser{
    userName: String,
    email: String,
    password: String,
    role:String,
    brithday: String,
    phone: String,
    social: String,
    avatar: String
   }
type QMovie {
    flim: String,
    trailer: String,
    decription: String,
    evaluate: Int,
    active: String,
    rap: String,
    address: String,
}
type QLikeComment {
     userName: String,
     avatar: String,
     flim: String,
     comment: String,
     like: Boolean,
}
   
extend type Query {
    userLikeComment: [QLikeComment],
    userDetail(userId:Int!):[QUser],
    pageUsers(limit:Int,offset:Int) : [QUser]!,
    pageMovie(limit:Int,offset:Int) : [QMovie]
   }
`);

module.exports = {
  typeDefs,
};
