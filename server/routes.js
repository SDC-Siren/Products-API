const express = require('express');
const router = express.Router();
const models = require('../database/models.js')

router.get('/products', (req, res) => {
  res.status(200).send('you want products?');
});

router.get('/products/:product_id/', (req, res) => {
  res.status(200).send(`${req.params.product_id}`);
});

router.get('/products/:product_id/styles', (req, res) => {
  res.status(200).send(`${req.params.product_id} styles`);
});

router.get('/products/:product_id/related', (req, res) => {
  res.status(200).send(`${req.params.product_id} related`);
});

module.exports = router;