import { Database } from '@money-story-workspace/core';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from './user.model';

//Database initialization
const db = new Database<UserModel>('users', {
    defaultData: [
        {
            id: uuidv4(),
            username: 'admin',
            password: 'admin',
            email: 'admin@email.com',
        },
    ],
});

const userRepository = new UserRepository(db);
export const userController = new UserController(userRepository);

