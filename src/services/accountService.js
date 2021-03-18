import bcrypt from "bcrypt";
import { runInTransaction } from "../db/runInTransaction";
import { findAccountByMail, insertAccount } from "../db/daos/accountDao";
import ExistingAccountError from "./errors/ExistingAccountError";

const BCRYPT_ROUNDS = 10;

async function createAccount(mail, password) {
  return runInTransaction(async () => {
    const account = await findAccountByMail(mail);

    if (account) {
      throw new ExistingAccountError();
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

    return insertAccount(mail, hashedPassword);
  });
}

export { createAccount };
