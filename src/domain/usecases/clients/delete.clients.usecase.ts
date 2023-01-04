import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

class DeleteClientUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository) {
    }
    async execute(data: { _id: string }): Promise<void> {
        return await this._repository.deleteById(data._id);
    }
}

export default new DeleteClientUseCase(
    ClientsRepository
);