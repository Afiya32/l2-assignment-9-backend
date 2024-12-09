import { Router } from 'express';
import { orderItemController } from './orderitem.controller';

const router = Router();

// Get all order items
router.get('/', orderItemController.getAllOrderItems);

// Get an order item by ID
router.get('/:id', orderItemController.getOrderItemById);

// Create a new order item
router.post('/', orderItemController.createOrderItem);

// Update an existing order item
router.patch('/:id', orderItemController.updateOrderItem);

// Delete an order item
router.delete('/:id', orderItemController.deleteOrderItem);

export default router;
