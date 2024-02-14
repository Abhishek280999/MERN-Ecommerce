const cartItemService = require("../services/cartItem.services.js");

async function updateCartItem(req, res) {
  const user = req.user;
  try {
    const updatedCartItem = await cartItemService.updateCartItem(
      user._id,
      req.params.id,
      req.body
    );

    return res.status(200).send(updatedCartItem);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function removeCartItem(req, res) {
  const user = req.user;
  try {
    await cartItemService.removeCartItem(user._id, req.params.id);
    return res.status(200).send({ message: "item removed", status: true });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

module.exports = { updateCartItem, removeCartItem };
