import { Router, Request, Response } from 'express';
import { userController } from './user.controller';

const router = Router();

// Define routes and map to controller functions
router.get('/:id', async (req: Request, res: Response) => {
    await userController.getUserById(req, res);
});
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;

