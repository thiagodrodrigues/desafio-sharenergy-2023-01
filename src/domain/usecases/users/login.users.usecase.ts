import { IUsersRepository } from "../../repositories/users.repository.interface";
import { IUseCase } from "../usecase.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import jwt from 'jsonwebtoken';

class LoginAuthUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository){

    }

    async execute(data: { username: string, password: string }) {
        const user = await this._repository.readByWhere(data.username);

        if(user && data.password == user.password!){
            const token = jwt.sign({user}, String(process.env.SECRET_KEY), {
                expiresIn: '2 days'
            });

            return {
                user: user,
                token: token
            };
        }

        return;
    }
}

export default new LoginAuthUseCase(
    UsersRepository
);