const mongoose = require("mongoose");
const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: false },
  date: { type: String, required: false },
});
const News = mongoose.model("News", NewsSchema);
module.exports = News;
