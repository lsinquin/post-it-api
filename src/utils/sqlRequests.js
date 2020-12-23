const sqlRequests = {
  INSERT_NOTE:
    'INSERT INTO note(title, content, "accountId") VALUES ($1, $2, $3) RETURNING *',
  SELECT_ALL_NOTES: "SELECT * FROM note",
  SELECT_NOTE_BY_ID: "SELECT * FROM note WHERE id = $1",
  UPDATE_NOTE_BY_ID:
    "UPDATE note SET title = $2, content = $3 WHERE id = $1 RETURNING *",
  DELETE_NOTE_BY_ID: "DELETE FROM note WHERE id = $1",
  INSERT_ACCOUNT:
    "INSERT INTO account(mail, password) VALUES ($1, $2) RETURNING *",
  SELECT_ACCOUNT_BY_ID: "SELECT * FROM account WHERE id = $1",
};

module.exports = sqlRequests;
