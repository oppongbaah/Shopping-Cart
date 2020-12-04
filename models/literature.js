const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const literatureSchema = new Schema({
    category: String,
    name: String,
    imageUrl: String,
    price: Number,
    currency: String,
    stock: Number,
    author: String,
    stores: {
        name: String,
        location: String,
        contact: String
    },
    description: String,
    more: String
});

module.exports = mongoose.model('Literature', literatureSchema);
