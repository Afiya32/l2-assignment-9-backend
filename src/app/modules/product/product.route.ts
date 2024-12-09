import { Router } from 'express';
import { productController } from './product.controller';

const router = Router();

// Get all products
router.get('/', productController.getAllProducts);

// Get a product by ID
router.get('/:id', productController.getProductById);

// Create a new product
router.post('/', productController.createProduct);

// Update an existing product
router.patch('/:id', productController.updateProduct);

// Delete a product
router.delete('/:id', productController.deleteProduct);

export default router;
