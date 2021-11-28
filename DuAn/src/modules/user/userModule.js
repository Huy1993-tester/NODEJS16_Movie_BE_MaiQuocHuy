const {resolvers} = require('./resolvers');
const {typeDefs} = require("./typeDefs")

const userModule ={
  resolvers,
  typeDefs
}


module.exports={
  userModule
}

