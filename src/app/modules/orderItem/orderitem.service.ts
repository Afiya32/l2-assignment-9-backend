import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createOrderItem = async (orderItemData: {
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
}) => {
  return await prisma.orderItem.create({
    data: orderItemData,
    include: {
      product: true,
      order: true,
    },
  });
};

const getAllOrderItems = async () => {
  return await prisma.orderItem.findMany({
    include: {
      product: true,
      order: true,
    },
  });
};

const getOrderItemById = async (id: number) => {
  return await prisma.orderItem.findUnique({
    where: { id },
    include: {
      product: true,
      order: true,
    },
  });
};

const updateOrderItem = async (
  id: number,
  updateData: Partial<{ productId: number; quantity: number; price: number }>
) => {
  return await prisma.orderItem.update({
    where: { id },
    data: updateData,
    include: {
      product: true,
      order: true,
    },
  });
};

const deleteOrderItem = async (id: number) => {
  return await prisma.orderItem.delete({
    where: { id },
  });
};

export const orderItemService = {
  createOrderItem,
  getAllOrderItems,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
};
