const { gql } = require("apollo-server-express");

const typeDefs = gql(`
type Rap {
    rap: String,
    address: String
}
extend type Mutation{
    newRap(rap: String,address: String):Rap!
}
`);

module.exports = {
  typeDefs,
};
