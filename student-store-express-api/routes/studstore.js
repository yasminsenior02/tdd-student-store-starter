const express = require("express");
const { Displayprod } = require("../model/studstore");
const { receipt } = require("../model/studstore");
const router = express.Router();
const modelstudstore = require("../model/studstore");
// const store = { products: "products" };

// const productId = { product: "product" };

router.get("/receipt/:orderId", (req, res, next) => {
  try {
    pastOrder = Store.receipt(req.params.orderId);
    if (pastOrder) {
      console.log(pastOrder);
    }

    res.status(200).json(pastOrder);
  } catch (err) {
    next(err);
  }
});

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
router.post("/receipt/:orderId", async (req, res, next) => {
  try {
    console.log(req.body);
    res.status(201).send(Store.createCart(req.body, req.params.orderId));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
