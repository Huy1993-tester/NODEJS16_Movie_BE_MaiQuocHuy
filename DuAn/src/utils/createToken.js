const jwt = require('jsonwebtoken')

function CreateToken(user) {
    const payload = {
      id: user._previousDataValues.id,
      role: user._previousDataValues.role,
    };
    let secretKey = "123456789@secretkey";
    const token = jwt.sign(payload, secretKey, {
      expiresIn: 100000000000000000000000000000000000000,
    });
    return token;
  }


  module.exports = {
    CreateToken,
  };