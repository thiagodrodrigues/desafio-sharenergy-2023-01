import createUsersUsecase from "../../../../domain/usecases/users/create.users.usecase";

class Mocks {
    async createUsers(){
        const users = await createUsersUsecase.execute(99); // execute: NUMBER (número de usuários da API RANDOM)
        return users 
    }
}

const execute = async ()=>{
    const mocks = new Mocks();
    const totalUsers = await mocks.createUsers();
    console.log(totalUsers)
    process.exit();
}

execute();
