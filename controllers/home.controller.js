const Fashion = require('../models/fashion');
const Products = require('../models/products');

module.export.allData = [];

Products.find((err, data) => {
  if (err) {
    console.log('Error in retrieving fashion products:' + err);
  }
  else {
    
  }
});
