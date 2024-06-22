import { userController } from './user.boostrap';
import { Router } from '@money-story-workspace/core';


const router = new Router();

router.get('/total', userController.totalUsers);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router.instance;