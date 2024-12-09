import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createOrder = async (orderData: {
  userId: number;
  totalAmount: number;
  items: { productId: number; quantity: number; price: number }[];
}) => {
  return await prisma.order.create({
    data: {
      userId: orderData.userId,
      totalAmount: orderData.totalAmount,
      items: {
        create: orderData.items,
      },
    },
    include: {
      items: {
        include: { product: true },
      },
    },
  });
};

const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      user: true,
      items: {
        include: { product: true },
      },
    },
  });
};

const getOrderById = async (id: number) => {
  return await prisma.order.findUnique({
    where: { id },
    include: {
      user: true,
      items: {
        include: { product: true },
      },
    },
  });
};

const updateOrder = async (
  id: number,
  updateData: Partial<{ totalAmount: number; items: { productId: number; quantity: number; price: number }[] }>
) => {
  return await prisma.order.update({
    where: { id },
    data: {
      ...updateData,
      items: updateData.items
        ? {
            deleteMany: {}, // Deletes all existing items first
            create: updateData.items, // Adds the new items
          }
        : undefined,
    },
    include: {
      items: {
        include: { product: true },
      },
    },
  });
};

const deleteOrder = async (id: number) => {
  return await prisma.order.delete({
    where: { id },
  });
};

export const orderService = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
