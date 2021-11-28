const  bcrypt  = require('bcrypt');

function EncodePassword(pass) {
  const salt = bcrypt.genSaltSync(10);
  const hashpass = bcrypt.hashSync(pass, salt);
  return hashpass;
}

function VerifyPassword(pass, person) {
  const ischeck = bcrypt.compareSync(
    pass,
    person[0]._previousDataValues.password
  );
  return ischeck;
}

module.exports = {
  EncodePassword,
  VerifyPassword,
};
