const mongoose = require('mongoose');
const conn = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/ShoppingCart',
 { useNewUrlParser: false });

conn.on('connected', function() {
    console.log('database is connected successfully');
});

conn.on('disconnected', function(){
    console.log('database is disconnected successfully');
})

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;
