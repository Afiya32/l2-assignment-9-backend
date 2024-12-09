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
exports.shopController = void 0;
const shop_service_1 = require("./shop.service");
// Get all shops
const getAllShops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shops = yield shop_service_1.shopService.getAllShops();
        res.status(200).json(shops);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch shops' });
    }
});
// Get a shop by ID
const getShopById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const shop = yield shop_service_1.shopService.getShopById(Number(id));
        if (!shop) {
            res.status(404).json({ error: 'Shop not found' });
            return;
        }
        res.status(200).json(shop);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch shop' });
    }
});
// Create a new shop
const createShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, logo, description, vendor } = req.body; // Fixed property name from 'vendorId' to 'vendor'
        const shop = yield shop_service_1.shopService.createShop({
            name,
            logo,
            description,
            vendor, // Fixed property name from 'vendor' to 'vendor'
        });
        res.status(201).json(shop);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create shop' });
    }
});
// Update a shop
const updateShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedShop = yield shop_service_1.shopService.updateShop(Number(id), updateData);
        res.status(200).json(updatedShop);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update shop' });
    }
});
// Delete a shop
const deleteShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield shop_service_1.shopService.deleteShop(Number(id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete shop' });
    }
});
exports.shopController = {
    getAllShops,
    getShopById,
    createShop,
    updateShop,
    deleteShop,
};
