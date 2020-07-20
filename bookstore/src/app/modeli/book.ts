export class Book {
    _id: number;
    name: string;
    description: string;
    grade: number;
    price: number;
    discount: boolean;
    picture: string;

    constructor(obj?:any){
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || "";
        this.description = obj && obj.description || "";
        this.grade = obj && obj.grade || null;
        this.price = obj && obj.price || null;
        this.discount = obj && obj.discount || false;
        this.picture = obj && obj.picture || "";
    }
}
