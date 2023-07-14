require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.PGUSER,
  database: process.env.PGDB
});

const model = {};


module.exports = model;