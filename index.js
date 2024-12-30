const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const ProductRoute = require("./route/productRoute");
const CategoryRoute = require("./route/categoryRoute");
const UserRoute = require("./route/userRoute");
dotenv.config();
const app = express();
app.use(express.json());
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connected with database");
  })
  .catch((err) => console.log(err));

app.use("/products", ProductRoute);
app.use("/category", CategoryRoute);
app.use("/user", UserRoute);
app.listen(4000, (req, res) => {
  console.log("server is running");
});
