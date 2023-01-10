import express from 'express';
import ReadWhereUseCase from '../../../domain/usecases/users/readWhere.users.usecase';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';
import readUsersUsecase from '../../../domain/usecases/users/read.users.usecase';

const log: debug.IDebugger = debug('app:user-middleware');

class UserMiddleware {
    
    async validateEmailRepeated(req: express.Request, res: express.Response, next: express.NextFunction) {
        let dataWhere: string = req.body.email;
        let idUser: string = req.params._id;
        const user = await ReadWhereUseCase.execute({
            datawhere: dataWhere
        });
        console.log(`adapters user middlewares linha 17`, idUser, String(user?._id))
        if(!user){
            next();
        } else if(dataWhere == user.email && idUser == String(user._id)) {
            next();
        } else {
            res.status(409).send({error: constantsConfig.USERS.MESSAGES.ERROR.USER_ALREADY_EXISTS.replace('{USER_ID}', String(dataWhere))});
        }
    }

    async validateUsernameRepeated(req: express.Request, res: express.Response, next: express.NextFunction) {
        let dataWhere: string = req.body.username;
        let idUser: string = req.params._id;
        const user = await ReadWhereUseCase.execute({
            datawhere: dataWhere
        });
        if(!user){
            next();
        } else if(dataWhere == user.username && idUser == String(user._id)) {
            next();
        } else {
            res.status(409).send({error: constantsConfig.USERS.MESSAGES.ERROR.USER_ALREADY_EXISTS.replace('{USER_ID}', String(dataWhere))});
        }
    }

    async validateUserExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await readUsersUsecase.execute({
            _id: req.params._id
        });
        if(user) {
            next();
        } else{
            res.status(400).send({error: constantsConfig.USERS.MESSAGES.ERROR.USER_NOT_FOUND.replace('{USER_ID}', String(req.params.idUser))})
        }
    }

    async validateRequiredNameBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.name) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.USERS.MESSAGES.ERROR.VOID_NAME});
        }
    }

    async validateRequiredEmailBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.email) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.USERS.MESSAGES.ERROR.VOID_EMAIL});
        }
    }

    async validateRequiredPasswordBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.password) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.USERS.MESSAGES.ERROR.VOID_PASSWORD});
        }
    }

    async validateRequiredPhotoBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.photo) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.USERS.MESSAGES.ERROR.VOID_PHOTO});
        }
    }

    async validateRequiredAgeBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.age) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.USERS.MESSAGES.ERROR.VOID_AGE});
        }
    }

    async validateRequiredUsernameFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.username) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.USERS.MESSAGES.ERROR.VOID_USERNAME});
        }
    }
}

export default new UserMiddleware();