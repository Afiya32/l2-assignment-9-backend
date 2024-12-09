"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
// Get all orders
router.get('/', order_controller_1.orderController.getAllOrders);
// Get an order by ID
router.get('/:id', order_controller_1.orderController.getOrderById);
// Create a new order
router.post('/', order_controller_1.orderController.createOrder);
// Update an existing order
router.patch('/:id', order_controller_1.orderController.updateOrder);
// Delete an order
router.delete('/:id', order_controller_1.orderController.deleteOrder);
exports.default = router;
