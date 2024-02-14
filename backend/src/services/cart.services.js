const Cart = require("../models/cart.models.js");


// Create a new cart for a user
async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    console.log("error - ", error);
    throw new Error(error.message);
  }
}

module.exports = { createCart};