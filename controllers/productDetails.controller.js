const Fashion = require('../models/fashion');

module.exports.renderPage = (req, res, ID) => {
  const id = ID.trim();
  Fashion.findById(id, (error, data) => {
    console.log(data);
    res.render('productDetails', {
      title: "product-details",
      item: data
    });
  });

}
