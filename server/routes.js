const express = require('express');
const router = express.Router();
const { getProducts, getInfo, getStyles, getRelated } = require('../database/models.js')

router.get('/products', (req, res) => {
  getProducts();
  res.status(200).send('you want products?');
});

router.get('/products/:product_id/', (req, res) => {
  getInfo();
  res.status(200).send(`${req.params.product_id}`);
});

router.get('/products/:product_id/styles', (req, res) => {
  getStyles();
  res.status(200).send(`${req.params.product_id} styles`);
});

router.get('/products/:product_id/related', (req, res) => {
  getRelated();
  res.status(200).send(`${req.params.product_id} related`);
});

module.exports = router;