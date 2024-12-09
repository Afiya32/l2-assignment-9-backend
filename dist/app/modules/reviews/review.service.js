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
exports.reviewService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createReview = (reviewData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.review.create({
        data: reviewData,
        include: {
            user: true,
            product: true,
        },
    });
});
const getAllReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.review.findMany({
        include: {
            user: true,
            product: true,
        },
    });
});
const getReviewById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.review.findUnique({
        where: { id },
        include: {
            user: true,
            product: true,
        },
    });
});
const updateReview = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.review.update({
        where: { id },
        data: updateData,
        include: {
            user: true,
            product: true,
        },
    });
});
const deleteReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.review.delete({
        where: { id },
    });
});
exports.reviewService = {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview,
};
