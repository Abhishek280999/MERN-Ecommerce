const orderService = require("../services/order.services.js");



const getAllOrders = async (req, res) => {
    try {
      const orders = await orderService.getAllOrders();
      return res.status(200).send(orders);
    } catch (error) {
      res.status(500).send({ error: "Something went wrong" });
    }
  };
  
  const confirmedOrder = (req, res) => {
    const orderId = req.params.orderId;

    try {
      const order = orderService.confirmedOrder(orderId);
      res.status(202).json(order);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  
  const shippOrder = (req, res) => {
    const orderId = req.params.orderId;
    try {
      const order = orderService.shipOrder(orderId);
      return res.status(202).send(order);
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  };
  
  const deliverOrder = (req, res) => {
    const orderId = req.params.orderId;
    try {
      const order = orderService.deliveredOrder(orderId);
      return res.status(202).send(order);
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  };
  
  const cancelledOrder = (req, res) => {
    const orderId = req.params.orderId;
    try {
      const order = orderService.cancelledOrder(orderId);
      return res.status(202).send(order);
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  };
  
  const deleteOrder = (req, res) => {
    const orderId = req.params.orderId;
    try {
      orderService.deleteOrder(orderId);
      res
        .status(202)
        .json({ message: "Order Deleted Successfully", success: true });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  
  module.exports = {
    getAllOrders,
    confirmedOrder,
    shippOrder,
    deliverOrder,
    cancelledOrder,
    deleteOrder,
  };
