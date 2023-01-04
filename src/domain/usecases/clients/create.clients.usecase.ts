import { ClientsEntity } from "../../entities/clients/type.clients.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

export class CreateClientUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository) {
    }
    async execute(data: ClientsEntity): Promise<ClientsEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateClientUseCase(
    ClientsRepository
);