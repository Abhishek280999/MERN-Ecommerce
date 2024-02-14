const express = require("express");
const router = express.Router();

const cartService = require("../services/cart.services.js");

const findUserCart = async (req, res) => {
  const user = req.user;
  try {
    const cart = await cartService.findUserCart(user._id);
    res.status(200).send(cart);
  } catch (error) {
    // Handle error here and send appropriate response
    res
      .status(500)
      .json({ message: "Failed to get user cart.", error: error.message });
  }
};

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
