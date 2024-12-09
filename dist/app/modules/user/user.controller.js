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
exports.userController = void 0;
const user_service_1 = require("./user.service");
// Get all users
const getAllUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_service_1.userService.getAllUsers();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});
// Get a user by ID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_service_1.userService.getUserById(Number(id));
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});
// Create a new user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, role } = req.body;
        const user = yield user_service_1.userService.createUser({ name, email, password, role });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});
// Update a user's details
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedUser = yield user_service_1.userService.updateUser(Number(id), updateData);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});
// Delete a user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield user_service_1.userService.deleteUser(Number(id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
});
// sign in
const signInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const user = yield user_service_1.userService.findByEmailAndPassword(email, password);
        res.status(200).json({
            message: 'Sign in successful',
            user,
        });
    }
    catch (error) {
        res.status(401).json({
            message: error.message || 'Invalid email or password',
        });
    }
});
exports.userController = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    signInUser
};
