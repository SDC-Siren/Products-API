const express = require('express');
const router = express.Router();
const { getProducts, getInfo, getStyles, getRelated } = require('../database/models.js')

router.get('/products', (req, res) => {
  getProducts(req.query.page, req.query.count)
    .then((response) => {
      res.status(200).send(response);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.get('/products/:product_id/', (req, res) => {
  getInfo(req.params.product_id)
    .then((response) => {
      if (response) {
        res.status(200).send(response);
      } else {
        res.status(404).send('This product does not exist.')
      }
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
});

router.get('/products/:product_id/styles', (req, res) => {
  getStyles(req.params.product_id)
    .then((response) => {
      res.status(200).send(response);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
});

router.get('/products/:product_id/related', (req, res) => {
  getRelated(req.params.product_id)
    .then((response) => {
      res.status(200).send(response);
    }).catch((error) => {
      res.sendStatus(500);
    })
});

module.exports = router;