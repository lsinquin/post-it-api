const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_ROUNDS } = require("../utils/constants");
const accountDao = require("../db/daos/accountDao");
const WrongCredentialsError = require("../utils/errors/WrongCredentialsError");
const NoAccountError = require("../utils/errors/NoAccountError");
const ExistingAccountError = require("../utils/errors/ExistingAccountError");

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

//TODO Transaction
exports.createAccount = async (mail, password) => {
  const account = await accountDao.getAccountByMail(mail);

  if (account) {
    throw new ExistingAccountError();
  }

  const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

  return accountDao.insertAccount(mail, hashedPassword);
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
