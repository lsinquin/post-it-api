const bcrypt = require("bcrypt");

const { BCRYPT_ROUNDS } = require("../utils/constants");
const accountDao = require("../db/daos/accountDao");

exports.signIn = async (mail, password) => {
  const account = await accountDao.getAccountByMail(mail);

  if (!account) {
    return false;
    // throw new Error("NO_ACCOUNT_FOUND");
  }

  const isPasswordCorrect = await bcrypt.compare(password, account.password);

  // if (!isPasswordCorrect) {
  //   throw new Error("SIGN_IN_NOT_AUTHORIZED");
  // }

  //set up token for authentification

  return isPasswordCorrect;
};

exports.createAccount = async (mail, password) => {
  const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

  return accountDao.insertAccount(mail, hashedPassword);
};
