const bcrypt = require("bcrypt");
const accountDao = require("../db/daos/accountDao");
const ExistingAccountError = require("./errors/ExistingAccountError");

const BCRYPT_ROUNDS = 10;

//TODO Transaction
exports.createAccount = async (mail, password) => {
  const account = await accountDao.getAccountByMail(mail);

  if (account) {
    throw new ExistingAccountError();
  }

  const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

  return accountDao.insertAccount(mail, hashedPassword);
};
