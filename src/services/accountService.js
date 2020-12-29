const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { BCRYPT_ROUNDS } = require("../utils/constants");
const accountDao = require("../db/daos/accountDao");
const AuthentificationError = require("../utils/errors/AuthentificationError");

exports.signIn = async (mail, password) => {
  const account = await accountDao.getAccountByMail(mail);

  if (!account) {
    throw new AuthentificationError("No account found for this mail");
  }

  const isPasswordCorrect = await bcrypt.compare(password, account.password);

  if (!isPasswordCorrect) {
    throw new AuthentificationError("Wrong password");
  }

  return generateAccessToken(account.id, account.mail);
};

exports.createAccount = async (mail, password) => {
  const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

  return accountDao.insertAccount(mail, hashedPassword);
};

generateAccessToken = (id, mail) =>
  jwt.sign(
    {
      accountId: id,
      mail: mail,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

verifyAccessToken = (token) => jwt.verify(token, process.env.JWT_SECRET);
