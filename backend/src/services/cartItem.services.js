const CartItem = require("../models/cartItem.model.js");
const userService = require("../services/user.services.js");

// Update an existing cart item
async function updateCartItem(userId, cartItemId, cartItemData) {
  // console.log(userId, cartItemId, cartItemData)
  try {
    const item = await findCartItemById(cartItemId);
 
    const user = await userService.findUserById(item.userId);
    // console.log("hdchhs" , user)

    if (!user) {
      throw new Error("user not found : ", userId);
    }

    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("You can't update another user's cart_item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

// Remove a cart item
async function removeCartItem(userId, cartItemId) {
  const cartItem = await findCartItemById(cartItemId);
  const user = await userService.findUserById(cartItem.userId);
  // const reqUser = await userService.findUserById(userId);

  if (user._id.toString() === cartItem.userId.toString()) {
    await CartItem.findByIdAndDelete(cartItemId);
  } else {
    throw new UserException("You can't remove another user's item");
  }
}

// Find a cart item by its ID
async function findCartItemById(cartItemId) {
    const cartItem = await CartItem.findById(cartItemId).populate("product")
    if (cartItem) {
      return cartItem;
    } else {
      throw new CartItemException(`CartItem not found with id: ${cartItemId}`);
    }
  }


  module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById,
  };
