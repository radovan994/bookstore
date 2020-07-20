export class Order{
    _id:number;
    address:string;
    appartment:string;
    telephone:number;
    names: string[];

    constructor(obj?:any){
        this._id = obj && obj._id || null;
        this.address = obj && obj.address || "";
        this.appartment = obj && obj.appartment || "";
        this.telephone = obj && obj.telephone || null;
        this.names = obj && obj.names || [];
    }
}