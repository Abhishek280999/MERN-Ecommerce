const express = require("express");
const router = express.Router();

const cartService = require("../services/cart.services");

const findUserCart = async (req, res) => {
  try {
    const user = req.user;
    const cart = await cartService.findUserCart(user.id);
    console.log(user)
    res.status(200).json(cart);
  } catch (error) {
    // Handle error here and send appropriate response
    res.status(501).json({ message: "Failed to get user cart." });
  }
}

const addItemToCart = async (req, res) => {
  const user = req.user;
  try {
    await cartService.addCartItem(user._id , req.body);

    res
      .status(200)
      .send({ message: "Item Added To Cart Successfully", status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add item to cart.", error: error.message });
  }
};

module.exports = { findUserCart, addItemToCart };
