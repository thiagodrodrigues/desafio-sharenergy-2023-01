import { ClientsEntity } from "../../entities/clients/type.clients.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

class UpdateClientUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository) {
    }
    async execute(data: ClientsEntity): Promise<ClientsEntity | undefined> {
        return await this._repository.updateById(data);
    }
}

export default new UpdateClientUseCase(
    ClientsRepository
);