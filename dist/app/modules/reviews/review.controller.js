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
exports.reviewController = void 0;
const review_service_1 = require("./review.service");
// Get all reviews
const getAllReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield review_service_1.reviewService.getAllReviews();
        res.status(200).json(reviews);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});
// Get a review by ID
const getReviewById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const review = yield review_service_1.reviewService.getReviewById(Number(id));
        if (!review) {
            res.status(404).json({ error: 'Review not found' });
            return;
        }
        res.status(200).json(review);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch review' });
    }
});
// Create a new review
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rating, comment, userId, productId } = req.body;
        const review = yield review_service_1.reviewService.createReview({
            rating,
            comment,
            userId,
            productId,
        });
        res.status(201).json(review);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create review' });
    }
});
// Update an existing review
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedReview = yield review_service_1.reviewService.updateReview(Number(id), updateData);
        res.status(200).json(updatedReview);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update review' });
    }
});
// Delete a review
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield review_service_1.reviewService.deleteReview(Number(id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete review' });
    }
});
exports.reviewController = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
};
