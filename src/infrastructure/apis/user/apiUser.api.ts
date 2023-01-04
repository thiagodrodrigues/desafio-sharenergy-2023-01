import { IUsersEntity } from '../../../domain/entities/users/user.entity';
import { randomUser } from '../../../adapters/connectors/randomUser.interface';
import fetch from "node-fetch";

export class ApiRandomUser implements randomUser {
    public async buscaUsers(results: number): Promise<IUsersEntity[] | undefined> {
        try{
            const responseRandom = await fetch(`https://randomuser.me/api/?nat=br&results=${results}`);

            if(responseRandom.status != 200)
                return;

            const dataRandomUser = (await responseRandom.json()) as any;
            let users = [];

            for(let index=0; index < dataRandomUser.results.length; index++) {
                users.push({
                    name: `${dataRandomUser.results[index].name.first} ${dataRandomUser.results[index].name.last}`,
                    email: dataRandomUser.results[index].email,
                    password: dataRandomUser.results[index].login.password,
                    photo: dataRandomUser.results[index].picture.large,
                    age: dataRandomUser.results[index].dob.age,
                    username: dataRandomUser.results[index].login.username
                })};
            return users;    
        ;
        } catch(error) {
            return;
        }
    }
    
}



/* name: users[0].name,
email: users[0].email,
password: users[0].password,
photo: users[0].photo,
age: users[0].age,
username: users[0].username
 */