const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.status(200).json({
    message: "Handling GET requests to /products",
  });
});

router.get("/:productId", function (req, res, next) {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "You discoverd the special ID",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "You passed an ID",
    });
  }
});

router.post("/", function (req, res, next) {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };

  res.status(201).json({
    message: "Handling POST requests to /products",
    createdProduct: product,
  });
});

router.patch("/:productId", function (req, res, next) {
  res.status(200).json({
    message: "Updated product",
  });
});

router.delete("/:productId", function (req, res, next) {
  res.status(200).json({
    message: "Deleted product",
  });
});

module.exports = router;
