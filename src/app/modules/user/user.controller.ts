import { Request, Response } from 'express';
import { userService } from './user.service';

// Get all users
const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Get a user by ID
const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(Number(id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Create a new user
const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await userService.createUser({ name, email, password, role });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Update a user's details
const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = await userService.updateUser(Number(id), updateData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

// Delete a user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

// sign in
const signInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await userService.findByEmailAndPassword(email, password);

    res.status(200).json({
      message: 'Sign in successful',
      user,
    });
  } catch (error: any) {
    res.status(401).json({
      message: error.message || 'Invalid email or password',
    });
  }
};


export const userController = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  signInUser
};
