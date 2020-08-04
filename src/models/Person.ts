import {Model} from 'objection'
export default class Person extends Model{
    //REQUIRED
    static tableName = 'persons';

    id : number;
    firstName :string;
    lastName :string;
    age : number;
    
    static jsonSchema ={
        type: 'object',
        required: ['firstName','lastName'],
        properties: {
            id: {type : 'integer'},
            firstName : {type:'string'},
            lastName: {type:'string'},
            age: {type:'number'},
        }
    }

}