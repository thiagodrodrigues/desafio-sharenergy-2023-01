import express from 'express';
import createUsersUsecase from '../../../domain/usecases/users/create.users.usecase';
import updateUsersUsecase from '../../../domain/usecases/users/update.users.usecase';
import deleteUsersUsecase from '../../../domain/usecases/users/delete.users.usecase';
import readUsersUsecase from '../../../domain/usecases/users/read.users.usecase';
import listUsersUsecase from '../../../domain/usecases/users/list.users.usecase';
import LoginAuthUseCase from '../../../domain/usecases/users/login.users.usecase';
import createoneUsersUsecase from '../../../domain/usecases/users/createone.users.usecase';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:users-controller');

class UsersController {

    async getUserById(req: express.Request, res: express.Response) {
        const user = await readUsersUsecase.execute({
            _id: req.params._id
        });
        res.status(200).send(user);
    }

    async listUser(req: express.Request, res: express.Response){
        const user = await listUsersUsecase.execute();
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        const user = await createoneUsersUsecase.execute(req.body); 
        log(user);
        res.status(201).send(user);
    }

    async updateUser(req: express.Request, res: express.Response) {
        const _id = await req.params._id;
        const user = await updateUsersUsecase.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            photo: req.body.photo,
            age: req.body.age,
            username: req.body.username,
            _id: _id
        });
        res.status(200).send(user);
    }

    async removeUser(req: express.Request, res: express.Response) {
        const user = await deleteUsersUsecase.execute({
            _id: req.params._id
        });
        res.status(204).send();
    }

    async login(req: express.Request, res: express.Response){
        const user = await LoginAuthUseCase.execute(req.body);
        if(user){
            res.status(200).send({
                User: {
                    _id: user.user._id,
                    name: user.user.name,
                    email: user.user.email
                },
                token: user.token
            });
        } else {
            res.status(401).send({
                error: constantsConfig.USERS.MESSAGES.ERROR.USER_UNAUTHENTICATED
            });
        }
        
    }

}

export default new UsersController();