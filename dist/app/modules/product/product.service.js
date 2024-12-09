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
exports.productService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Fetch all products with shop and reviews details
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.findMany({
        include: {
            shop: true, // Include shop details
            Reviews: true, // Include related reviews
        },
    });
});
// Fetch a single product by ID
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.findUnique({
        where: { id },
        include: {
            shop: true, // Include shop details
            Reviews: true, // Include related reviews
        },
    });
});
// Create a new product
const createProduct = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.create({
        data: productData,
    });
});
// Update an existing product
const updateProduct = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.update({
        where: { id },
        data: updateData,
    });
});
// Delete a product by ID
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.delete({
        where: { id },
    });
});
exports.productService = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
