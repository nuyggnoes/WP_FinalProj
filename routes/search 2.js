let express = require("express");
const session = require("express-session");
let router = express.Router();
const { Product, findProductByCategory, findProductById } = require("../models/productModel");

router.get("/", async function (req, res) {
  const category = req.query.category;
  console.log(`Requested category: ${category}`);
  try {
    const products = await findProductByCategory(category);
    res.render("search", { category: category, products: products, session: req.session });
  } catch (error) {
    res.status(500).render("search", { errorMessage: "서버 오류가 발생했습니다." });
  }
});

router.get("/detail", async function (req, res) {
  const productId = req.query.id;
  console.log(productId);
  try {
    const product = await findProductById(productId);
    console.log(product);
    res.render("detail", { id: productId, product: product });
  } catch (error) {
    res.status(500).render("search", { errorMessage: "서버 오류가 발생했습니다." });
  }
});

module.exports = router;
