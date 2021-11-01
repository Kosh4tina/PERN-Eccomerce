const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const {
  getCart,
  addItem,
  deleteItem,
} = require("../controllers/cart.controller");

router.use(verifyToken);
// get cart items
router.route("/").get(getCart);

// add item to cart
router.route("/add").post(addItem);

// delete item from cart
router.route("/delete").delete(deleteItem);

module.exports = router;
