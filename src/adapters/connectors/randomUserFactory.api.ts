import { randomUser } from './randomUser.interface';
import { IUsersEntity } from '../../domain/entities/users/user.entity';

export abstract class randomUserFactory {
    public abstract factoryMethod(): randomUser;

    public preencheUsers(results: number): Promise<IUsersEntity[] | undefined> {
        const userProvider = this.factoryMethod();

        return userProvider.buscaUsers(results);
    }
}