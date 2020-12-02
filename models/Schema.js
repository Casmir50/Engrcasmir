const mongoose = require("mongoose");

const user = {
  userId: Number,
  id: Number,
  title: String,
  completed: Boolean,
};
const Schema = mongoose.Schema;
const userSchema = new Schema(user);

module.exports = mongoose.model("Post", userSchema);
