import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fetch all users
 const getAllUsers = async () => {
  return await prisma.user.findMany({
    include: {
      Shop: true,
      Orders: true,
      Reviews: true,
    },
  });
};

// Fetch a single user by ID
 const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
    include: {
      Shop: true,
      Orders: true,
      Reviews: true,
    },
  });
};

// Create a new user
 const createUser = async (userData: { name: string; email: string; password: string; role: string }) => {
  return await prisma.user.create({
    data: userData,
  });
};

// Update a user's details
 const updateUser = async (id: number, updateData: Partial<{ name: string; email: string; password: string; role: string }>) => {
  return await prisma.user.update({
    where: { id },
    data: updateData,
  });
};

// Delete a user
 const deleteUser = async (id: number) => {
  return await prisma.user.delete({
    where: { id },
  });
};
export const userService={
    getAllUsers,deleteUser,updateUser,getUserById,createUser
}