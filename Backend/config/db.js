const mongoose = require('mongoose');
require('dotenv').config()
 function db() {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
      console.log('Connected to MongoDB!');
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB:', err);
    });
}

module.exports = db
