const User = require("../model/userModel");

exports.createUser = async (req, res) => {
  try {
    const { fullname, address, email } = req.body;
    const userModel = new User({
      fullname,
      address,
      email,
    });
    const result = await userModel.save();
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const result = await User.find();
    return await res.json(result);
  } catch (error) {
    console.log(error);
  }
};
