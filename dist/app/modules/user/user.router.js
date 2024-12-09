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
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
// Define routes and map to controller functions
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_controller_1.userController.getUserById(req, res);
}));
router.get('/', user_controller_1.userController.getAllUsers);
router.post('/', user_controller_1.userController.createUser);
router.patch('/:id', user_controller_1.userController.updateUser);
router.delete('/:id', user_controller_1.userController.deleteUser);
router.post('/sign-in', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_controller_1.userController.signInUser(req, res);
}));
exports.default = router;
