const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Number, required: false, default: 3 },
  email: { type: String, required: false },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
