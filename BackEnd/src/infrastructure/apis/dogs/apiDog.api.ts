import { randomDog } from '../../../adapters/connectors/randomDog.interface'
import fetch from "node-fetch";

export class ApiRandomDog implements randomDog {
    public async buscaDog(): Promise<any | undefined> {
        try{
            const responseRandom = await fetch(`https://random.dog/woof.json`);

            if(responseRandom.status != 200)
                return;

            const dataRandomDog = (await responseRandom.json()) as any;

            const dogs = dataRandomDog.url
            return dogs;    
        ;
        } catch(error) {
            return;
        }
    }
    
}
