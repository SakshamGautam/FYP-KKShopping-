const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProductDetails,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { isAuthenticatedUser, authoriseRoles } = require("../middleware/autho");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/product/new")
  .post(isAuthenticatedUser, authoriseRoles("admin"), createProduct);

router.route("/product/:id").get(getProductDetails);

router
  .route("/product/:id")
  .put(isAuthenticatedUser, authoriseRoles("admin"), updateProduct);

router
  .route("/product/:id")
  .delete(isAuthenticatedUser, authoriseRoles("admin"), deleteProduct);

module.exports = router;
