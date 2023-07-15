require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.PGUSER,
  database: process.env.PGDB
});


module.exports.getProducts = async function(page = 1, count = 5) {
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

module.exports.getInfo = async function(product_id) {
  console.log('getting product info');
  const productData = await pool.query({
    text: 'SELECT id, name, slogan, description, category, default_price FROM product WHERE id = ANY($1)',
    values: [[product_id]]
  });
  const featureData = await pool.query({
    text: 'SELECT feature, value FROM features WHERE product_id = ANY($1)',
    values: [[product_id]]
  });
  const response = productData.rows[0];
  response.features = featureData.rows;
  return response;
};

module.exports.getStyles = function(product_id) {
  // get styles, photos, skus
  console.log('getting product styles');
};

module.exports.getRelated = function(product_id) {
  console.log('getting related products');
};