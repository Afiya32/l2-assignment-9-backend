"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_controller_1 = require("./review.controller");
const router = (0, express_1.Router)();
// Get all reviews
router.get('/', review_controller_1.reviewController.getAllReviews);
// Get a review by ID
router.get('/:id', review_controller_1.reviewController.getReviewById);
// Create a new review
router.post('/', review_controller_1.reviewController.createReview);
// Update an existing review
router.patch('/:id', review_controller_1.reviewController.updateReview);
// Delete a review
router.delete('/:id', review_controller_1.reviewController.deleteReview);
exports.default = router;
