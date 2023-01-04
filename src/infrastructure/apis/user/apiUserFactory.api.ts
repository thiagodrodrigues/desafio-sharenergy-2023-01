import { randomUser } from '../../../adapters/connectors/randomUser.interface';
import { randomUserFactory } from '../../../adapters/connectors/randomUserFactory.api';
import { ApiRandomUser } from './apiUser.api';

export class ApiUserFactory extends randomUserFactory {
    public factoryMethod(): randomUser {
        return new ApiRandomUser();
    }
}