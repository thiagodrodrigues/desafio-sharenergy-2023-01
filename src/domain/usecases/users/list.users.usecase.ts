import { UsersEntity } from "../../entities/users/type.users.entity";
import { IUsersRepository } from "../../repositories/users.repository.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

class ListUsersUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(): Promise<UsersEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListUsersUseCase(
    UsersRepository
);

