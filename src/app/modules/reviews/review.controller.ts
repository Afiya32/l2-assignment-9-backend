import { Request, Response } from 'express';
import { reviewService } from './review.service';

// Get all reviews
const getAllReviews = async (req: Request, res: Response): Promise<void> => {
  try {
    const reviews = await reviewService.getAllReviews();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

// Get a review by ID
const getReviewById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const review = await reviewService.getReviewById(Number(id));
    if (!review) {
      res.status(404).json({ error: 'Review not found' });
      return;
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch review' });
  }
};

// Create a new review
const createReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { rating, comment, userId, productId } = req.body;

    const review = await reviewService.createReview({
      rating,
      comment,
      userId,
      productId,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create review' });
  }
};

// Update an existing review
const updateReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedReview = await reviewService.updateReview(Number(id), updateData);
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update review' });
  }
};

// Delete a review
const deleteReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await reviewService.deleteReview(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete review' });
  }
};

export const reviewController = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
