import express from 'express';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';
import jwt from 'jsonwebtoken';

const log: debug.IDebugger = debug('app:auth-middleware');

class AuthMiddleware {
    async checkAuth(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const token = req.header(`Authorization`)?.replace(`Bearer `, ``);

            if(!token){
                res.status(401).send({
                    error: constantsConfig.USERS.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
                const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
                if(typeof decoded == `string`){
                    res.status(401).send({
                        error: constantsConfig.USERS.MESSAGES.ERROR.REQUIRE_LOGIN
                    });
                } else {
                    next();
                }
            }

        } catch (err) {
            res.status(401).send({
                error: constantsConfig.USERS.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        }
    }
}

export default new AuthMiddleware();