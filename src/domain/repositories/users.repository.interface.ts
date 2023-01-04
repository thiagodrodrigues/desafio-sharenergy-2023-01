import { UsersEntity } from "../entities/users/type.users.entity"

export interface IUsersRepository {
    read(resourceId: string): Promise<UsersEntity | undefined>,
    create(resource: UsersEntity[] | undefined): Promise<UsersEntity[] | undefined>,
    createOne(resource: UsersEntity): Promise<UsersEntity>,
    deleteById(resourceId: string): Promise<void>,
    updateById(resource: UsersEntity): Promise<UsersEntity | undefined>,
    readByWhere(resourceId: string): Promise<UsersEntity | undefined>,
    list(): Promise<UsersEntity[]>
}