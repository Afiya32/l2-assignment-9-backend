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
exports.productController = void 0;
const product_service_1 = require("./product.service");
// Get all products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_service_1.productService.getAllProducts();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});
// Get product by ID
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_service_1.productService.getProductById(Number(id));
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});
// Create a new product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, category, inventory, description, images, discount, shopId, } = req.body;
        const product = yield product_service_1.productService.createProduct({
            name,
            price,
            category,
            inventory,
            description,
            images,
            discount,
            shopId,
        });
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});
// Update a product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedProduct = yield product_service_1.productService.updateProduct(Number(id), updateData);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
});
// Delete a product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield product_service_1.productService.deleteProduct(Number(id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
});
exports.productController = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
