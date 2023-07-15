require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.PGUSER,
  database: process.env.PGDB
});


module.exports.getProducts = async function(page = 1, count = 5) {
  console.log('getting products');

  // get ids for products on given page (count = products per page)
  let lastIndex = page * count;
  let firstIndex = lastIndex - count + 1;
  let ids = [];
  for (let i = firstIndex; i <= lastIndex; i += 1) {
    ids.push(i);
  };

  const response = await pool.query({
    text: 'SELECT id, name, slogan, description, category, default_price FROM product WHERE id = ANY($1)',
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