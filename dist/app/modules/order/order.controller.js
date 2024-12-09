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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
// Get all orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_service_1.orderService.getAllOrders();
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});
// Get an order by ID
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const order = yield order_service_1.orderService.getOrderById(Number(id));
        if (!order) {
            res.status(404).json({ error: 'Order not found' });
            return;
        }
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch order' });
    }
});
// Create a new order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, totalAmount, items } = req.body;
        const order = yield order_service_1.orderService.createOrder({
            userId,
            totalAmount,
            items,
        });
        res.status(201).json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create order' });
    }
});
// Update an existing order
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedOrder = yield order_service_1.orderService.updateOrder(Number(id), updateData);
        res.status(200).json(updatedOrder);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update order' });
    }
});
// Delete an order
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield order_service_1.orderService.deleteOrder(Number(id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete order' });
    }
});
exports.orderController = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};
