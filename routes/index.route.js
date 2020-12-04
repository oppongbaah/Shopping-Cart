const express = require('express');
const router = express.Router();
const app = express();

const api = require('../config/api.config');
const collections = require('../config/collections.config');

const databaseCtrl = require('../controllers/database.controller');
const fashionCtrl = require('../controllers/fashion.controller');
const prodDetCtrl = require('../controllers/productDetails.controller');

router.get(api.collections, (req, res, next) => {
  console.log("You are running the Database configuration with administrative privileges");
  next();
});

/*
      DATABASE ROUTES
*/

router.get(api.collections, (req, res, next) => {
  databaseCtrl.renderPage(req, res, next);
});

router.get(api.createCollections, (req, res, next) => {
  collections.create(res);
  res.redirect(api.collections);
});

router.get(api.uploadDocuments, (req, res, next) => {
  collections.upload(req, res);
  res.redirect(api.collections);
});

router.get(api.clearDocuments, (req, res, next) => {
  collections.clear(req, res);
  res.redirect(api.collections);
});

/*
      ROOT ROUTES
*/

router.get(api.root, (req, res, next) => {
  fashionCtrl.renderPage(req, res, next);
});

/*
      HOME ROUTES
*/

router.get(api.cart, (req, res, next) => {
  res.render('cart', {title: "Your Cart"});
});

router.get(api.clearCart, (req, res, next) => {
  // set the clear cart controller
  console.log("Clear Cart");
});

router.get(api.productDetails, (req, res, next) => {
  const productID = req.params.id;
  prodDetCtrl.renderPage(req, res, productID);
});

module.exports = router;
