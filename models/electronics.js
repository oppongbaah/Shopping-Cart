const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const electronicSchema = new Schema({
    category: String,
    genre: String,
    name: String,
    model: String,
    imageUrl: String,
    price: Number,
    currency: String,
    color: String,
    specs: {
      ram_size: String,
      cpu: {
        brand: String,
        speed: String
      },
      gpu: String,
      drive: {
          name: String,
          size: String
      }
    },
    os: String,
    description: String,
    more: String,
    size: Array,
    stock: Number,
    stores: {
        name: String,
        location: String,
        contact: String
    }
});

module.exports = mongoose.model('Electronics', electronicSchema);
