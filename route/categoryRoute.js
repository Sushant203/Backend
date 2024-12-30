const express = require("express");
const {
  createCategory,
  getCategory,
} = require("../controller/categoryController");
const router = express.Router();
router.post("/", createCategory);
router.get("/", getCategory);
module.exports = router;
