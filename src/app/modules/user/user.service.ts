import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
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


// Fetch a user by email and password
const findByEmailAndPassword = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Compare the provided password with the stored hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  // Remove the password field before returning the user data
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const userService={
    getAllUsers,deleteUser,updateUser,getUserById,createUser, findByEmailAndPassword,
}






