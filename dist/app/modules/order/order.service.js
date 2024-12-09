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
exports.orderService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.order.create({
        data: {
            userId: orderData.userId,
            totalAmount: orderData.totalAmount,
            items: {
                create: orderData.items,
            },
        },
        include: {
            items: {
                include: { product: true },
            },
        },
    });
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.order.findMany({
        include: {
            user: true,
            items: {
                include: { product: true },
            },
        },
    });
});
const getOrderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.order.findUnique({
        where: { id },
        include: {
            user: true,
            items: {
                include: { product: true },
            },
        },
    });
});
const updateOrder = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.order.update({
        where: { id },
        data: Object.assign(Object.assign({}, updateData), { items: updateData.items
                ? {
                    deleteMany: {}, // Deletes all existing items first
                    create: updateData.items, // Adds the new items
                }
                : undefined }),
        include: {
            items: {
                include: { product: true },
            },
        },
    });
});
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.order.delete({
        where: { id },
    });
});
exports.orderService = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
};
