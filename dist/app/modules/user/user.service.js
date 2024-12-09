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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
// Fetch all users
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.findMany({
        include: {
            Shop: true,
            Orders: true,
            Reviews: true,
        },
    });
});
// Fetch a single user by ID
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.findUnique({
        where: { id },
        include: {
            Shop: true,
            Orders: true,
            Reviews: true,
        },
    });
});
// Create a new user
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.create({
        data: userData,
    });
});
// Update a user's details
const updateUser = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.update({
        where: { id },
        data: updateData,
    });
});
// Delete a user
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.delete({
        where: { id },
    });
});
// Fetch a user by email and password
const findByEmailAndPassword = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new Error('Invalid email or password');
    }
    // Compare the provided password with the stored hashed password
    const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid email or password');
    }
    // Remove the password field before returning the user data
    const { password: _ } = user, userWithoutPassword = __rest(user, ["password"]);
    return userWithoutPassword;
});
exports.userService = {
    getAllUsers, deleteUser, updateUser, getUserById, createUser, findByEmailAndPassword,
};
