import { CommonRoutesConfig } from "./common.routes.config";
import othersController from "../controllers/others.controller";
import LoginAuthMiddleware from "../middlewares/auth.middleware";
import express from "express";

export class OthersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'OthersRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/dogs`) 
                .all(LoginAuthMiddleware.checkAuth) // Verifica se o usuário está logado para executar açoes de usuário
                .get(othersController.listDog) // lista todos os clientes

        return this.app;
    }
}