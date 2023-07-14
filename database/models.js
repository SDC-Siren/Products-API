require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.PGUSER,
  database: process.env.PGDB
});


module.exports.getProducts = function() {
  console.log('getting products');
};

module.exports.getInfo = function(product_id) {
  console.log('getting product info');
};

module.exports.getStyles = function(product_id) {
  console.log('getting product styles');
};

module.exports.getRelated = function(product_id) {
  console.log('getting related products');
}