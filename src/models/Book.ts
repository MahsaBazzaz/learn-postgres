import {Model} from 'objection'
export default class Book extends Model{
    //REQUIRED
    static tableName = 'books';

    id : number;
    title :string;
    description :string;
    author : string;
    price : number;

    static jsonSchema ={
        type: 'object',
        required: ['firstName','lastName'],
        properties: {
            id: {type : 'integer'},
            title : {type:'string'},
            description: {type:'string'},
            author: {type:'string'},
            price : {type:'number'}
            
        }
    }

}

module.exports = Book;