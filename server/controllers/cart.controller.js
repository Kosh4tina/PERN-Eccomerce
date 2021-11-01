const cartService = require("../services/cart.service");

const getCart = async (req, res) => {
  const userId = req.user.id;

  // get cart items
  const cart = await cartService.getCart(userId);
  res.json({ items: cart });
};

// add item to cart
const addItem = async (req, res) => {
  const cart_id = req.user.cart_id;

  await cartService.emptyCart(cart_id);

  const cart = await cartService.addItem({ ...req.body, cart_id });
  
  res.status(200).json({ data: cart });
};

// delete item from cart
const deleteItem = async (req, res) => {
  const { product_id } = req.body;
  const cart_id = req.user.cart_id;

  const data = await cartService.removeItem({ cart_id, product_id });
  res.status(200).json(data);
};

module.exports = {
  getCart,
  addItem,
  deleteItem,
};
