var express = require('express');
const ProductModel = require('../models/ProductModel');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('home/index');
});
router.get('/toy', (req, res) => {
    res.render('home/toy');
});
router.get('/products', async (_req, res) => {
    var product = await ProductModel.find();
    res.render('home/products', { product: product });
  })

module.exports = router;