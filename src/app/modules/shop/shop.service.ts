import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createShop = async (shopData: Omit<Prisma.ShopCreateInput, 'id'>) => {
  return await prisma.shop.create({
    data: shopData,
  });
};

const getAllShops = async () => {
  return await prisma.shop.findMany({
    include: { vendor: true, products: true }, // Include related vendor and products data
  });
};

const getShopById = async (id: number) => {
  return await prisma.shop.findUnique({
    where: { id },
    include: { vendor: true, products: true },
  });
};

const updateShop = async (id: number, updateData: Partial<Prisma.ShopUpdateInput>) => {
  return await prisma.shop.update({
    where: { id },
    data: updateData,
  });
};

const deleteShop = async (id: number) => {
  return await prisma.shop.delete({
    where: { id },
  });
};

export const shopService = {
  createShop,
  getAllShops,
  getShopById,
  updateShop,
  deleteShop,
};
