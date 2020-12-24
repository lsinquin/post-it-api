const bcrypt = require("bcrypt");

const { BCRYPT_ROUNDS } = require("../utils/constants");
const accountDao = require("../db/daos/accountDao");

exports.login = async (mail, password) => {
  const [account] = await accountDao.getAccountByMail(mail);

  if (!account) {
    throw new Error("NO_ACCOUNT_FOUND");
  }

  const isPasswordCorrect = await bcrypt.compare(password, account.password);

  if (!isPasswordCorrect) {
    throw new Error("LOGIN_NOT_AUTHORIZED");
  }

  //set up token for authentification

  return true;
};

exports.createAccount = async (mail, password) => {
  const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

  return accountDao.insertAccount(mail, hashedPassword);
};
