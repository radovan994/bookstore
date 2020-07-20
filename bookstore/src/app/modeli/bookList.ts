import {Book} from './book'

export class BookList{
    results: Book[];
    constructor(obj?:any){
        this.results = obj && obj.results.map(x => {return new Book(x);}) || {};
    }

}