const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fashionSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  more: {
    type: String,
    required: true
  },
  shoeSize: {
    40: Number,
    41: Number,
    42: Number,
    43: Number
  },
  shirtSize: {
    S: Number,
    M: Number,
    L: Number,
    XL: Number,
    XXL: Number,
  },
  color: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  stores: {
    name: String,
    location: String,
    contact: String
  }
});

module.exports = mongoose.model('Fashion', fashionSchema);
