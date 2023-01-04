import { IDatabase } from "./databese.interface";

export interface IDatabaseModel extends  IDatabase {
    readByWhere(type: any, data: any):any
}