const Product = require("../model/productModel");
exports.createProduct = async (req, res) => {
  try {
    const { title, description, image, price, category } = req.body;
    const productModel = new Product({
      title,
      price,
      description,
      image,
      category,
    });
    const result = await productModel.save(); //save the product model to db
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};
exports.getProduct = async (req, res) => {
  try {
    const data = await Product.find();
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
};
