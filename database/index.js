const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  user: 'lorenjohnson',
  database: 'atelierProducts'
});

// running the SQL file executes its statements and create schema
const schema = fs.readFileSync(path.join(__dirname, '/schema.sql')).toString();
const etl = fs.readFileSync(path.join(__dirname, '/etl.sql')).toString();


pool.query(schema, (err) => {
  if (err) {
    console.log('Error executing SQL file', err);
  }
})

pool.query(etl, (err) => {
  if (err) {
    console.log('Error executing SQL file', err);
  }
});

pool.query(`SELECT * FROM product`, (err, res) => {
  if (err) {
    console.log('Error executing query', err);
  } else {
    console.log(res);
  }
  pool.end();
});

// query tables created from schema
// pool.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE';`, (err, res) => {
//   if (err) {
//     console.error('Error executing query', err);
//   } else {
//     console.log(res);
//   }
//   // End the database connection
//   pool.end();
// });