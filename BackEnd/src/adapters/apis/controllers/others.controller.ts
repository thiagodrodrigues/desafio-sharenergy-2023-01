import express from 'express';
import listDogsUsecase from '../../../domain/usecases/dogs/list.dogs.usecase';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:others-controller');

class OthersController {

    async listDog(req: express.Request, res: express.Response){
        const dog = await listDogsUsecase.execute();
        res.status(200).send(dog);
    }

}

export default new OthersController();