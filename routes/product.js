var express = require('express');
const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');
var router = express.Router();

router.get('/', async (_req, res) => {
  var product = await ProductModel.find();
  res.render('product/index', { product: product });
})
router.get('/add', async (_req, res) => {
  var category = await CategoryModel.find();
  res.render('product/add', { category: category });
});
router.post('/add', async (req, res) => {
  var product = req.body;
  await ProductModel.create(product);
  console.log('Add product success');
  res.redirect('/product');
});

router.get('/addCategory', async (_req, res) => {
  res.render('product/addCategory');
});
router.post('/addCategory', async (req, res) => {
  var category = req.body;
  await CategoryModel.create(category);
  console.log('Add product success');
  res.redirect('/product/add');
});

router.get('/delete/:id', async (req, res) => {
  var id = req.params.id;
  await ProductModel.findByIdAndDelete(id);
  console.log('Delete product success');
  res.redirect('/product');
});
router.get('/edit/:id', async (req, res) => {
  var id = req.params.id;
  var product = await ProductModel.findById(id);
  res.render('product/edit', { product: product });
});
router.post('/edit/:id', async (req, res) => {
  var id = req.params.id;
  var product = req.body;
  await ProductModel.findByIdAndUpdate(id, product);
  console.log('Update success');
  res.redirect('/product')
});
router.post('/search', async (req, res) => {
  var keyword = req.body.name;
  var product = await ProductModel.find({ name: new RegExp(keyword, "i") });
  res.render('product/index', { product: product });
})
router.get('/detail/:id', async (req, res) => {
  var id = req.params.id;
  var product = await ProductModel.findById(id);
  res.render('product/detail', { product: product });
});

module.exports = router;