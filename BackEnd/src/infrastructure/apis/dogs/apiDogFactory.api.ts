import { randomDog } from '../../../adapters/connectors/randomDog.interface';
import { randomDogFactory } from '../../../adapters/connectors/randomDogFactory.api';
import { ApiRandomDog } from './apiDog.api';

export class ApiDogFactory extends randomDogFactory {
    public factoryMethod(): randomDog {
        return new ApiRandomDog();
    }
}