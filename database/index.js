const { Pool } = require('pg');

const pool = new Pool({
  user: 'lorenjohnson',
  database: 'atelierProducts'
});

pool.query('SHOW TABLES', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log(res);
  }

  // End the database connection
  pool.end();
});