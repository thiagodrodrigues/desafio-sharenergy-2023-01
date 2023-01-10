import { UsersEntity } from "../../entities/users/type.users.entity";
import { IUsersRepository } from "../../repositories/users.repository.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";
import { ApiUserFactory } from "../../../infrastructure/apis/user/apiUserFactory.api";
import { randomUserFactory } from "../../../adapters/connectors/randomUserFactory.api";

export class CreateUserUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository, private _randomUser: randomUserFactory) {
    }
    
    async execute(data: number): Promise<UsersEntity[] | undefined> {
        const sharenergy: UsersEntity[] | undefined = [{
            name: 'Desafio Sharenergy',
            email: 'desafiosharenergy@sharenergy.com.br',
            password: "sh@r3n3rgy",
            photo: 'https://media.licdn.com/dms/image/C4E0BAQF7ZTVfAKGA2w/company-logo_200_200/0/1602075568390?e=2147483647&v=beta&t=ohGAAZ8bPtyiwYsPFjlUwHbNurhGhOSTZj69-Jc1hZg',
            age: 7,
            username: "desafiosharenergy"
        }];
            let dados = await this._randomUser.preencheUsers(data);
            if(!dados){
                return sharenergy;
            } else {
            const complete: UsersEntity[] | undefined = [];
            const completed: UsersEntity[] | undefined = complete.concat(sharenergy, dados)
        return await this._repository.create(completed);
    }}
}

export default new CreateUserUseCase(
    UsersRepository,
    new ApiUserFactory
);