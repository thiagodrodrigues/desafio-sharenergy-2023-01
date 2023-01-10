import { IUsersEntity } from "../../domain/entities/users/user.entity";

export interface randomUser {
    buscaUsers(results: number): Promise<IUsersEntity[] | undefined>;
}