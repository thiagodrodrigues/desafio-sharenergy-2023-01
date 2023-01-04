export interface IDatabase{
    create(type: any, data: any): any,
    read(type: any, dataId: string | undefined): any,
    list(type: any, dataWhere?:any): any[];
    update(type : any, data: any): any,
    delete(type: any, dataId:any): any
}