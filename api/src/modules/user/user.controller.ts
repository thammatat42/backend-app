import type { Request, Response } from 'express';
import { UserRepository } from './user.repository';
import { BaseController } from '@money-story-workspace/core';
import { BaseResponse } from 'core/src/response';
import { UserCount, UserModel } from './user.model';
export class UserController extends BaseController {

    constructor(public userRepository: UserRepository) {
        super();
    }
 
    /**
     * Read all users
    */
    async getAll(
        req: Request,
        res: Response
      ): Promise<BaseResponse<UserModel[]>> {
        return {
          data: await this.userRepository.getAll(),
        };
      }

    /**
     * Read user by id
    */
    async getById(req: Request, res: Response): Promise<BaseResponse<UserModel>> {
        return {
            data: await this.userRepository.getById(req.params.id),
        };
    }

    /**
     * Create a new user
    */
    async create(req: Request, res: Response): Promise<BaseResponse<UserModel>> {
        await this.userRepository.create(req.body);
        return {
            message: 'User created successfully',
        };
    }
    
    /**
     * Update a user
    */
    async update(req: Request, res: Response): Promise<BaseResponse<UserModel>> {
        await this.userRepository.update({
            ...req.body,
            id: req.params.id,
        });
        
        return {
            message: 'User updated successfully',
        };
    }

    /**
     * Delete a user
    */
    async delete(req: Request, res: Response) {
        await this.userRepository.delete(req.params.id);
        return {
            message: 'User deleted successfully',
        };
    }

    /**
     * Get total users
    */
    async totalUsers(req: Request, res: Response): Promise<BaseResponse<UserCount>>{     
        return {
            data: await this.userRepository.totalUsers(),
        };
    }

}