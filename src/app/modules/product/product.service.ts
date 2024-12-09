import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fetch all products with shop and reviews details
const getAllProducts = async () => {
  return await prisma.product.findMany({
    include: {
      shop: true, // Include shop details
      Reviews: true, // Include related reviews
    },
  });
};

// Fetch a single product by ID
const getProductById = async (id: number) => {
  return await prisma.product.findUnique({
    where: { id },
    include: {
      shop: true, // Include shop details
      Reviews: true, // Include related reviews
    },
  });
};

// Create a new product
const createProduct = async (productData: {
  name: string;
  price: number;
  category: string;
  inventory: number;
  description: string;
  images: string[];
  discount?: number;
  shopId: number;
}) => {
  return await prisma.product.create({
    data: productData,
  });
};

// Update an existing product
const updateProduct = async (
  id: number,
  updateData: Partial<{
    name: string;
    price: number;
    category: string;
    inventory: number;
    description: string;
    images: string[];
    discount: number;
  }>
) => {
  return await prisma.product.update({
    where: { id },
    data: updateData,
  });
};

// Delete a product by ID
const deleteProduct = async (id: number) => {
  return await prisma.product.delete({
    where: { id },
  });
};

export const productService = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
