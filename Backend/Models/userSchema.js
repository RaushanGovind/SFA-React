const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true, // Optional: ensures no duplicate users
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  role: {
    type: String,
    enum: [
      "Super Admin",
      "Railway Admin",
      "Division Admin",
      "Lobby Admin",
      "Collection Member",
      "Member",
    ],
    required: false,
    default: "Member", // Optional: default role for new users
  },
});

module.exports.user = mongoose.model("user", userSchema);
