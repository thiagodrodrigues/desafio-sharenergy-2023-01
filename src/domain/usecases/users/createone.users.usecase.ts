import { UsersEntity } from "../../entities/users/type.users.entity";
import { IUsersRepository } from "../../repositories/users.repository.interface";
import usersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

export class CreateClientUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: UsersEntity): Promise<UsersEntity | undefined> {
        return await this._repository.createOne(data);
    }
}

export default new CreateClientUseCase(
    usersRepository
);