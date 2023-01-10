import { DogsEntity } from "../../entities/dogs/type.dogs.entity";
import { randomDogFactory } from "../../../adapters/connectors/randomDogFactory.api";
import { ApiDogFactory } from "../../../infrastructure/apis/dogs/apiDogFactory.api";
import { IUseCase } from "../usecase.interface";

class ListDogsUseCase implements IUseCase {
    constructor(private _randomDog: randomDogFactory) {
    }
    async execute(): Promise<DogsEntity[] | undefined> {
        let dog = await this._randomDog.preencheDog();
        return dog;
    }
}

export default new ListDogsUseCase(
    new ApiDogFactory
);
