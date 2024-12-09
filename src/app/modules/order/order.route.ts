import { Router } from 'express';
import { orderController } from './order.controller';

const router = Router();

// Get all orders
router.get('/', orderController.getAllOrders);

// Get an order by ID
router.get('/:id', orderController.getOrderById);

// Create a new order
router.post('/', orderController.createOrder);

// Update an existing order
router.patch('/:id', orderController.updateOrder);

// Delete an order
router.delete('/:id', orderController.deleteOrder);

export default router;
