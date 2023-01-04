import { IUsersRepository } from "../../domain/repositories/users.repository.interface";
import mongoose from "mongoose";
import { MongoDatabase } from "../../infrastructure/persistence/mongo/mongo.database";
import usersModelsMongoDatabase from "../../infrastructure/persistence/mongo/models/users.models.mongo.database";
import { IUsersEntity } from "../../domain/entities/users/user.entity";
import { IDatabaseModel } from "../../infrastructure/persistence/database.model.interface";

export class UsersRepository implements IUsersRepository {
    constructor(
        private _database: IDatabaseModel, 
        private _modelUsers: mongoose.Model<any>
        ){
    }

    async list(): Promise<IUsersEntity[]> {
        try{
            const user = await this._database.list(this._modelUsers);
            return user;
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async read(resourceId: string): Promise<IUsersEntity | undefined> {
        try{
            const user = await this._database.read(this._modelUsers, resourceId);
            
            return user;
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async createOne(resource: IUsersEntity): Promise<IUsersEntity> {
        const userModel = await this._database.create(this._modelUsers, resource);
        resource._id = userModel._id;
        return resource;
    }

    async create(resource: IUsersEntity[]): Promise<IUsersEntity[]> {
        const userModel = await this._database.create(this._modelUsers, resource);
        return userModel;
    }

    async deleteById(resourceId: string): Promise<void> {
        await this._database.delete(this._modelUsers, { _id: resourceId });
    }

    async updateById(resource: IUsersEntity): Promise<IUsersEntity | undefined> {
        let user = await this._database.read(this._modelUsers, resource._id);
        await this._database.update(user, resource);
        return resource;
    }

    async readByWhere(resource: string): Promise<IUsersEntity | undefined> {
        try{
            const user = await this._database.readByWhere(this._modelUsers, resource);
            return user;
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

}

export default new UsersRepository(
    MongoDatabase.getInstance(),
    usersModelsMongoDatabase
    );