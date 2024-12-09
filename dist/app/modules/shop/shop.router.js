"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shop_controller_1 = require("./shop.controller");
const router = (0, express_1.Router)();
// Get all shops
router.get('/', shop_controller_1.shopController.getAllShops);
// Get a shop by ID
router.get('/:id', shop_controller_1.shopController.getShopById);
// Create a new shop
router.post('/', shop_controller_1.shopController.createShop);
// Update an existing shop
router.patch('/:id', shop_controller_1.shopController.updateShop);
// Delete a shop
router.delete('/:id', shop_controller_1.shopController.deleteShop);
exports.default = router;
