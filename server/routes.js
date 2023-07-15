const express = require('express');
const router = express.Router();
const { getProducts, getInfo, getStyles, getRelated } = require('../database/models.js')

router.get('/products', (req, res) => {
  const page = req.query.page;
  const count = req.query.count;

  getProducts(page, count)
    .then((response) => {
      res.status(200).send(response);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.get('/products/:product_id/', (req, res) => {
  getInfo(req.params.product_id);
  res.status(200).send(`${req.params.product_id}`);
});

router.get('/products/:product_id/styles', (req, res) => {
  getStyles(req.params.product_id);
  res.status(200).send(`${req.params.product_id} styles`);
});

router.get('/products/:product_id/related', (req, res) => {
  getRelated(req.params.product_id);
  res.status(200).send(`${req.params.product_id} related`);
});

module.exports = router;