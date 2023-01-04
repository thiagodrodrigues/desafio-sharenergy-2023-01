import { IClientsRepository } from "../../domain/repositories/clients.repository.interface";
import { IDatabase } from "../../infrastructure/persistence/databese.interface";
import mongoose from "mongoose";
import { MongoDatabase } from "../../infrastructure/persistence/mongo/mongo.database";
import clientsModelsMongoDatabase from "../../infrastructure/persistence/mongo/models/clients.models.mongo.database";
import { IClientsEntity } from "../../domain/entities/clients/client.entity";

export class ClientsRepository implements IClientsRepository {
    constructor(
        private _database: IDatabase, 
        private _modelClients: mongoose.Model<any>
        ){
    }

    async create(resource: IClientsEntity): Promise<IClientsEntity> {
        const clientModel = await this._database.create(this._modelClients, resource);
        resource._id = clientModel._id;
        return resource;
    }

    async deleteById(resourceId: string): Promise<void> {
        await this._database.delete(this._modelClients, { _id: resourceId });
    }

    async list(): Promise<IClientsEntity[]> {
        const clients = this._database.list(this._modelClients);
        return clients;
    }

    async updateById(resource: IClientsEntity): Promise<IClientsEntity | undefined> {
        let transactionDoc = await this._database.read(this._modelClients, resource._id);
        await this._database.update(transactionDoc, resource);
        return resource;
    }
}

export default new ClientsRepository(
    MongoDatabase.getInstance(),
    clientsModelsMongoDatabase
    );