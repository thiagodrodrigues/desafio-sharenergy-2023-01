import { IUsersRepository } from "../../repositories/users.repository.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

class DeleteUserUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: { _id: string }): Promise<void> {
        return await this._repository.deleteById(data._id);
    }
}

export default new DeleteUserUseCase(
    UsersRepository
);