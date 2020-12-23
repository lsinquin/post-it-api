const { Pool } = require("pg");

// Pool will use the following environment variables to connect to  the database :
// PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT
const pool = new Pool();

exports.query = (request, params) => pool.query(request, params);
