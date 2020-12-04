const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const electricalsSchema = new Schema({
  category: String,
  name: String,
  imageUrl: String,
  price: Number,
  currency: String,
  stock: Number,
  brand: String,
  stores: {
      name: String,
      location: String,
      contact: String
  },
  description: String,
  more: String
});

module.exports = mongoose.model('Electricals', electricalsSchema);
