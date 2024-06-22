import { Database } from '@money-story-workspace/core';
import { UserModel } from './user.model';

export class UserRepository {

    constructor(protected db: Database<UserModel>) {}

    async getAll() {
        return this.db.readAll();
    }

    async getById(id: string) {
        return this.db.read(id);
    }

    async create(input: UserModel) {
        return this.db.create(input);
    }

    async update(input: UserModel) {
        return this.db.update(input);
    }

    async delete(id: string) {
        return this.db.delete(id);
    }

    async totalUsers() {
        return this.db.totalUsers();
    }

}