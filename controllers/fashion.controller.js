const api = require('../config/api.config');

const Fashion = require('../models/fashion');
const Electronics = require('../models/electronics');

const allModels = [Fashion, Electronics];

module.exports.renderPage = (req, res, next) => {
  getProduct(req, res);
}

const getProduct = (req, res) => {

  for (let model of allModels) {
    model.find((err, data) => {
      if (err) {
        console.log('Error in retrieving fashion products:' + err);
      }
      else {
        if (model.collection.collectionName === "fashions"){
          res.
          render('index', {fashion: data});
        }
        else if(model.collection.collectionName === "electronics"){
          
        }


      }
    })
  }

}

module.exports.getProduct = getProduct;
