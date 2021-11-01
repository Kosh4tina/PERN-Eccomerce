const router = require("express").Router();
const cart = require("./cart");
const order = require("./order");
const product = require("./product");
const users = require("./users");
const auth = require("./auth");
const payment = require("./payment");
const site = require("./site");

router.use("/auth", auth);
router.use("/users", users);
router.use("/products", product);
router.use("/orders", order);
router.use("/cart", cart);
router.use("/payment", payment);
router.use("/site", site);


module.exports = router;
