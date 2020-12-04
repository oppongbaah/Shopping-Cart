const Electronics = require('../models/electronics');

const getProduct = (req, res) => {
  Electronics.find((err, data) => {
    if (err) {
        console.log('Error in retrieving fashion products:' + err);
    }
    else {
      res.render('index', {electronic: data});
    }
  });
}

module.exports.getProduct = getProduct;
