import {Model} from 'objection'

export default class Animal extends Model{
    //REQUIRED
    static tableName = 'animals';
    id : number;
    name :string;
    static jsonSchema = {
        type : 'object',
        required: ['name'],

        properties:{
            id : {type : 'integer'},
            name: {type:'string'}
        }
    }

}