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
exports.shopService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createShop = (shopData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.shop.create({
        data: shopData,
    });
});
const getAllShops = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.shop.findMany({
        include: { vendor: true, products: true }, // Include related vendor and products data
    });
});
const getShopById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.shop.findUnique({
        where: { id },
        include: { vendor: true, products: true },
    });
});
const updateShop = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.shop.update({
        where: { id },
        data: updateData,
    });
});
const deleteShop = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.shop.delete({
        where: { id },
    });
});
exports.shopService = {
    createShop,
    getAllShops,
    getShopById,
    updateShop,
    deleteShop,
};
