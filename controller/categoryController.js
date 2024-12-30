const Category = require("../model/categoryModel");
exports.createCategory = async (req, res) => {
  try {
    const { categoryName, thumbnail } = req.body;
    const categoryModel = new Category({
      categoryName,
      thumbnail,
    });

    //saving the category data to db
    const result = await categoryModel.save();
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getCategory = async (req, res) => {
  try {
    const result = await Category.find();
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};
