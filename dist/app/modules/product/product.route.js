"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
// Get all products
router.get('/', product_controller_1.productController.getAllProducts);
// Get a product by ID
router.get('/:id', product_controller_1.productController.getProductById);
// Create a new product
router.post('/', product_controller_1.productController.createProduct);
// Update an existing product
router.patch('/:id', product_controller_1.productController.updateProduct);
// Delete a product
router.delete('/:id', product_controller_1.productController.deleteProduct);
exports.default = router;
