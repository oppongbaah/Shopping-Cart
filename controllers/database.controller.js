const express = require('express');
const router = express.Router();

const api = require('../config/api.config');

module.exports.renderPage = (req, res, next) => {
  res.render('database', {
    createAPI: api.createCollections,
    uploadAPI: api.uploadDocuments,
    clearAPI: api.clearDocuments
  });
}
