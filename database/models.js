require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.PGUSER,
  database: process.env.PGDB
});


module.exports.getProducts = async function(page = 1, count = 5) {
  console.log('getting products');

  // get ids for page 1, 5 per page
  let ids = [32, 4534]
  const response = await pool.query({
    text: 'SELECT name, slogan, description, category, default_price FROM product WHERE id = ANY($1)',
    values: [ids]
  });
  return response.rows;
};

module.exports.getInfo = function(product_id) {
  console.log('getting product info');
};

module.exports.getStyles = function(product_id) {
  console.log('getting product styles');
};

module.exports.getRelated = function(product_id) {
  console.log('getting related products');
};