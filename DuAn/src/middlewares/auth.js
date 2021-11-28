const jwt = require("jsonwebtoken");
// const { User, Movie, Ticket, sequelize } = require("../models");
function Authentication(token) {
  let secret = "123456789@secretkey";
  const decode = jwt.verify(token, secret);
  return decode;
}

function Authorization(permison) {
  const role = ["ADMIN"];
  const ischeck = role.includes(permison.role);
  return ischeck;
}

module.exports = {
  Authentication,
  Authorization,
};
