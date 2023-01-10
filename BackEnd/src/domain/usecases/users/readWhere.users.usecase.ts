import { UsersEntity } from "../../entities/users/type.users.entity";
import { IUsersRepository } from "../../repositories/users.repository.interface";
import { IUseCase } from "../usecase.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";

class ReadWhereUseCase implements IUseCase {

    constructor(private _repository: IUsersRepository) {

    }

    async execute(data: { datawhere: string }): Promise<UsersEntity | undefined> {
        return await this._repository.readByWhere(data.datawhere);
    }
}

export default new ReadWhereUseCase(
    UsersRepository
);