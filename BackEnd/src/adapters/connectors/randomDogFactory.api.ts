import { randomDog } from './randomDog.interface';

export abstract class randomDogFactory {
    public abstract factoryMethod(): randomDog;

    public preencheDog(): Promise<any[] | undefined> {
        const userProvider = this.factoryMethod();

        return userProvider.buscaDog();
    }
}