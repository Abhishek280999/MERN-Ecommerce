const express=require("express");
const router=express.Router();
const orderController = require("../controller/adminOrderController");
const authenticate = require("../middleware/authenticat");


router.get("/",authenticate,orderController.getAllOrders)
router.put("/:orderId/confirmed", authenticate,orderController.confirmedOrder)
router.put("/:orderId/shio", authenticate,orderController.shippOrder)
router.put("/:orderId/deliver", authenticate,orderController.deliverOrder)
router.put("/:orderId/cancel", authenticate,orderController.cancelledOrder)
router.put("/:orderId/delete", authenticate,orderController.deleteOrder)



module.exports= router;