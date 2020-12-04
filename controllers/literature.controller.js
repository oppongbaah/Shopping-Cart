const express = require('express');
const router = express.Router();

const api = require('../config/api.config');

const fashionController = require('../controllers/fashion.controller');
const electronicController = require('../controllers/electronic.controller');

module.exports.renderPage = (req, res, next) => {
  fashionController.getProduct(req, res);
  // electronicController.getProduct(req, res);
}
