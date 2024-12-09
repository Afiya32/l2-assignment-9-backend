import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createReview = async (reviewData: {
  rating: number;
  comment: string;
  userId: number;
  productId: number;
}) => {
  return await prisma.review.create({
    data: reviewData,
    include: {
      user: true,
      product: true,
    },
  });
};

const getAllReviews = async () => {
  return await prisma.review.findMany({
    include: {
      user: true,
      product: true,
    },
  });
};

const getReviewById = async (id: number) => {
  return await prisma.review.findUnique({
    where: { id },
    include: {
      user: true,
      product: true,
    },
  });
};

const updateReview = async (
  id: number,
  updateData: Partial<{ rating: number; comment: string }>
) => {
  return await prisma.review.update({
    where: { id },
    data: updateData,
    include: {
      user: true,
      product: true,
    },
  });
};

const deleteReview = async (id: number) => {
  return await prisma.review.delete({
    where: { id },
  });
};

export const reviewService = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
