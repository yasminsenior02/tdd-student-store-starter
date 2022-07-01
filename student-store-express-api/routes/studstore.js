const express = require("express");
const { Displayprod } = require("../model/studstore");
const router = express.Router();
const modelstudstore = require("../model/studstore");
// const store = { products: "products" };

// const productId = { product: "product" };

router.get("/", async (req, res) => {
  const prods = await modelstudstore.Displayprod();
  console.log(prods);
  res.status(200).send(prods);
});

router.get("/:productId", async (req, res) => {
  const callprod = req.params.productId;
  console.log(callprod);
  const specfic = await modelstudstore.EachProd(callprod);
  res.status(200).send(specfic);
});

module.exports = router;
