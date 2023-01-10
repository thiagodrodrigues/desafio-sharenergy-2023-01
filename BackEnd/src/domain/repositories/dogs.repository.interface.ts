import { DogsEntity } from "../entities/dogs/type.dogs.entity";

export interface IDogsRepository {
    list(): Promise<DogsEntity[]>,
}