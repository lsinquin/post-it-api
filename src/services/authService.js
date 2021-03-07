const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const accountDao = require("../db/daos/accountDao");
const WrongCredentialsError = require("./errors/WrongCredentialsError");
const NoAccountError = require("./errors/NoAccountError");

exports.signIn = async (mail, password) => {
  const account = await accountDao.getAccountByMail(mail);

  if (!account) {
    throw new NoAccountError();
  }

  const isPasswordCorrect = await bcrypt.compare(password, account.password);

  if (!isPasswordCorrect) {
    throw new WrongCredentialsError();
  }

  return generateAccessToken(account.id, account.mail);
};

const generateAccessToken = (id, mail) =>
  jwt.sign(
    {
      accountId: id,
      mail: mail,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
