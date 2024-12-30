const mongoose = require("mongoose");
const Category = mongoose.Schema({
  categoryName: String,
  thumbnail: String,
});
module.exports = mongoose.model("Category", Category);
