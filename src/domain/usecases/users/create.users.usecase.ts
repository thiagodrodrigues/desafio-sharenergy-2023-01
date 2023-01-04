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
            photo: 'https://www.sharenergy.com.br/wp-content/uploads/2017/05/logo_color.min-01-01.png',
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