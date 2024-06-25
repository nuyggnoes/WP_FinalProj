let express = require("express");
const session = require("express-session");
let router = express.Router();
const { Product } = require("../models/productModel");

router.get("/", async function (req, res) {
  try {
    const products = await Product.findAll();
    res.render("main", { products: products, session: req.session });
  } catch (error) {
    res.status(500).render("main", { errorMessage: "서버 오류가 발생했습니다." });
  }
});

module.exports = router;
