const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, index: true },
  link:  { type: String, index: true },
  price:  { type: Number , index: true },
  mrp: { type: Number , index: true },
  ratings: { type: String , index: true },
  image: { type: String , index: true },
  ratingsCount: { type: Number , index: true },
});

module.exports = mongoose.model("Product", productSchema);
