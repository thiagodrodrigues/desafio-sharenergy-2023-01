import express from 'express';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:user-middleware');

class ClientMiddleware {

    async validateRequiredNameBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.name) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.CLIENTS.MESSAGES.ERROR.VOID_NAME});
        }
    }

    async validateRequiredEmailBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.email) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.CLIENTS.MESSAGES.ERROR.VOID_EMAIL});
        }
    }

    async validateRequiredPhoneBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.phone) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.CLIENTS.MESSAGES.ERROR.VOID_PHONE});
        }
    }

    async validateRequiredAddressBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.address) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.CLIENTS.MESSAGES.ERROR.VOID_ADDRESS});
        }
    }

    async validateRequiredCpfBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.cpf) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.CLIENTS.MESSAGES.ERROR.VOID_CPF});
        }
    }

    

}

export default new ClientMiddleware();