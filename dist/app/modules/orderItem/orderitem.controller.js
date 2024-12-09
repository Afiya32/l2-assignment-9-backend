"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderItemController = void 0;
const orderitem_service_1 = require("./orderitem.service");
// Get all order items
const getAllOrderItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItems = yield orderitem_service_1.orderItemService.getAllOrderItems();
        res.status(200).json(orderItems);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch order items' });
    }
});
// Get an order item by ID
const getOrderItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const orderItem = yield orderitem_service_1.orderItemService.getOrderItemById(Number(id));
        if (!orderItem) {
            res.status(404).json({ error: 'Order item not found' });
            return;
        }
        res.status(200).json(orderItem);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch order item' });
    }
});
// Create a new order item
const createOrderItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId, productId, quantity, price } = req.body;
        const orderItem = yield orderitem_service_1.orderItemService.createOrderItem({
            orderId,
            productId,
            quantity,
            price,
        });
        res.status(201).json(orderItem);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create order item' });
    }
});
// Update an existing order item
const updateOrderItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedOrderItem = yield orderitem_service_1.orderItemService.updateOrderItem(Number(id), updateData);
        res.status(200).json(updatedOrderItem);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update order item' });
    }
});
// Delete an order item
const deleteOrderItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield orderitem_service_1.orderItemService.deleteOrderItem(Number(id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete order item' });
    }
});
exports.orderItemController = {
    getAllOrderItems,
    getOrderItemById,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
};
