import { Router } from 'express';
import { shopController } from './shop.controller';

const router = Router();

// Get all shops
router.get('/', shopController.getAllShops);

// Get a shop by ID
router.get('/:id', shopController.getShopById);

// Create a new shop
router.post('/', shopController.createShop);

// Update an existing shop
router.patch('/:id', shopController.updateShop);

// Delete a shop
router.delete('/:id', shopController.deleteShop);

export default router;
