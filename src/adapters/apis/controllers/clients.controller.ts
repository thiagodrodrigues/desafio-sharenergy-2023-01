import express from 'express';
import createClientsUsecase from '../../../domain/usecases/clients/create.clients.usecase';
import updateClientsUsecase from '../../../domain/usecases/clients/update.clients.usecase';
import deleteClientsUsecase from '../../../domain/usecases/clients/delete.clients.usecase';
import readClientUsecase from '../../../domain/usecases/clients/read.clients.usecase';
import debug from 'debug';

const log: debug.IDebugger = debug('app:clients-controller');

class ClientsController {
    async listClients(req: express.Request, res: express.Response){
        const clients = await readClientUsecase.execute();
        res.status(200).send(clients);
    }

    async createClient(req: express.Request, res: express.Response) {
        const client = await createClientsUsecase.execute(req.body);
        log(client);
        res.status(201).send(client);
    }

    async updateClient(req: express.Request, res: express.Response) {
        const _id = await req.params._id;
        const client = await updateClientsUsecase.execute({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
            cpf: req.body.cpf,
            _id: _id
        });
        res.status(200).send(client);
    }

    async removeClient(req: express.Request, res: express.Response) {
        const client = await deleteClientsUsecase.execute({
            _id: req.params._id
        });
        res.status(204).send();
    }

}

export default new ClientsController();