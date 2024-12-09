import { Router } from 'express';
import { reviewController } from './review.controller';

const router = Router();

// Get all reviews
router.get('/', reviewController.getAllReviews);

// Get a review by ID
router.get('/:id', reviewController.getReviewById);

// Create a new review
router.post('/', reviewController.createReview);

// Update an existing review
router.patch('/:id', reviewController.updateReview);

// Delete a review
router.delete('/:id', reviewController.deleteReview);

export default router;
