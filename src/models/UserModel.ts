const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
    default: "",
  },
  email: {
    type: String,
  },
});

const User = mongoose.model("User", userschema);
module.exports = User;
