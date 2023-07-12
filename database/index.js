const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
  user: 'lorenjohnson',
  database: 'atelierProducts'
});

// running the SQL file executes its statements and create model
const model = fs.readFileSync('./database/model.sql').toString();

pool.query(model, (err) => {
  if (err) {
    console.log('Error executing SQL file', err);
  }
});

// pool.query('SELECT product FROM information_schema.tables', (err, res) => {
//   if (err) {
//     console.error('Error executing query', err);
//   } else {
//     console.log(res);
//   }

//   // End the database connection
//   pool.end();
// });