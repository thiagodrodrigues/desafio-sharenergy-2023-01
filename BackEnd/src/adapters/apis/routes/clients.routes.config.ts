import { CommonRoutesConfig } from "./common.routes.config";
import clientsController from "../controllers/clients.controller";
import LoginAuthMiddleware from "../middlewares/auth.middleware";
import clientsMiddleware from "../middlewares/clients.middleware";
import express from "express";

export class ClientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/clients`) 
                .all(LoginAuthMiddleware.checkAuth) // Verifica se o usuário está logado para executar açoes de cliente
                .get(clientsController.listClients) // lista todos os clientes
        
        this.app.route(`/clients/create`) 
                .all(LoginAuthMiddleware.checkAuth) // Verifica se o usuário está logado para executar açoes de cliente
                .post(
                    clientsMiddleware.validateRequiredNameBodyFields, // valida se o campo nome foi preenchido
                    clientsMiddleware.validateRequiredEmailBodyFields, // valida se o campo email foi preenchido
                    clientsMiddleware.validateRequiredAddressBodyFields, // valida se o campo endereço foi preenchido
                    clientsMiddleware.validateRequiredPhoneBodyFields, // valida se o campo telefone foi preenchido
                    clientsMiddleware.validateRequiredCpfBodyFields, // valida se o campo CPF foi preenchido
                    clientsController.createClient  // cria novo cliente
                    );

        this.app.route(`/clients/:_id`) 
                .put(
                    clientsMiddleware.validateRequiredNameBodyFields, // valida se o campo nome foi preenchido
                    clientsMiddleware.validateRequiredEmailBodyFields, // valida se o campo email foi preenchido
                    clientsMiddleware.validateRequiredAddressBodyFields, // valida se o campo endereço foi preenchido
                    clientsMiddleware.validateRequiredPhoneBodyFields, // valida se o campo telefone foi preenchido
                    clientsMiddleware.validateRequiredCpfBodyFields, // valida se o campo CPF foi preenchido
                    clientsController.updateClient // atualiza cliente
                    )
                .delete(clientsController.removeClient); // deleta cliente

        return this.app;
    }
}