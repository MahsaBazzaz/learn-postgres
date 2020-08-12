import {Model} from 'objection'


export class Person extends Model{
    //REQUIRED
    static tableName = 'persons';

    id : number;
    name :string;
    family :string;
    age : number;
    city : string;
    favorite : number;

    static jsonSchema ={
        type: 'object',
        properties: {
            id: {type : 'integer'},
            name : {type:'string'},
            family: {type:'string'},
            age: {type:'number'},
            city : {type:'string'},
            favorite: {type:'number'}
        }
    }

    static relationMappings = {
        favorite: {
            relation: Model.BelongsToOneRelation,
            modelClass: __dirname + '/Book',
            join: {
                from: 'persons.id',
                to: 'books.id'
            }
        }
    };

}