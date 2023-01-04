import { ClientsEntity } from "../entities/clients/type.clients.entity"

export interface IClientsRepository {
    list(): Promise<ClientsEntity[]>,
    create(resource: ClientsEntity): Promise<ClientsEntity>,
    deleteById(resourceId: string): Promise<void>,
    updateById(resource: ClientsEntity): Promise<ClientsEntity | undefined>
}