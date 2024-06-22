import type { Request, Response } from 'express';
import express from 'express';
import { userRoutes } from './modules/user';

const router = express.Router();

router.use('/users', userRoutes);

router.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Hello API' });
});


export default router;