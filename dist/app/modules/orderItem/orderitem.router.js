"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderitem_controller_1 = require("./orderitem.controller");
const router = (0, express_1.Router)();
// Get all order items
router.get('/', orderitem_controller_1.orderItemController.getAllOrderItems);
// Get an order item by ID
router.get('/:id', orderitem_controller_1.orderItemController.getOrderItemById);
// Create a new order item
router.post('/', orderitem_controller_1.orderItemController.createOrderItem);
// Update an existing order item
router.patch('/:id', orderitem_controller_1.orderItemController.updateOrderItem);
// Delete an order item
router.delete('/:id', orderitem_controller_1.orderItemController.deleteOrderItem);
exports.default = router;
