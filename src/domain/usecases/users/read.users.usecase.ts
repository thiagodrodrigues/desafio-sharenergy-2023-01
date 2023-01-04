import { UsersEntity } from "../../entities/users/type.users.entity";
import { IUsersRepository } from "../../repositories/users.repository.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

class ReadUsersUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: { _id: string }): Promise<UsersEntity | undefined> {
        return await this._repository.read(data._id);
    }
}

export default new ReadUsersUseCase(
    UsersRepository
);