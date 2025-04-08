const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
});

// Create the model and export it
module.exports.user = mongoose.model("user", userSchema);
