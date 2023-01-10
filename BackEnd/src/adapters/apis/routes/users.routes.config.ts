import { CommonRoutesConfig } from "./common.routes.config";
import UsersController from "../controllers/users.controller";
import LoginAuthMiddleware from "../middlewares/auth.middleware";
import express from "express";
import usersController from "../controllers/users.controller";
import userMiddleware from "../middlewares/user.middleware";

export class UserRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
                    
        this.app.route(`/`)
            .post(UsersController.login); // logar um usuário

        this.app.route('/users/create')
            .post(
                userMiddleware.validateRequiredAgeBodyFields, // Verifica se o campo Idade foi preenchido
                userMiddleware.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
                userMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
                userMiddleware.validateRequiredPasswordBodyFields, // Verifica se o campo Senha foi preenchido
                userMiddleware.validateRequiredPhotoBodyFields, // Verifica se o campo Foto foi preenchido
                userMiddleware.validateRequiredUsernameFields, // Verifica se o campo Username foi preenchido
                userMiddleware.validateEmailRepeated, // Verifica se o email informado é único
                userMiddleware.validateUsernameRepeated, // Verifica se o username informado é único
                usersController.createUser // Cria novo usuário
            )

        this.app.route('/users')
            .all(LoginAuthMiddleware.checkAuth) // Verifica se o usuário está logado
            .get(usersController.listUser); // Lista todos os usuários

        this.app.route('/users/:_id')
            .all(LoginAuthMiddleware.checkAuth)
            .put(
                userMiddleware.validateRequiredAgeBodyFields, // Verifica se o campo Idade foi preenchido
                userMiddleware.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
                userMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
                userMiddleware.validateRequiredPasswordBodyFields, // Verifica se o campo Senha foi preenchido
                userMiddleware.validateRequiredPhotoBodyFields, // Verifica se o campo Foto foi preenchido
                userMiddleware.validateRequiredUsernameFields, // Verifica se o campo Username foi preenchido
                userMiddleware.validateUserExists, // valida se existe o ID informado
                userMiddleware.validateEmailRepeated, // Verifica se o email informado é único
                userMiddleware.validateUsernameRepeated, // Verifica se o username informado é único
                usersController.updateUser // Cria novo usuário
            )
            .delete(usersController.removeUser) // Deletar usuário
    

        // /cats status code http cat

        // /dog refresh api dog
        

        return this.app;
    }
}