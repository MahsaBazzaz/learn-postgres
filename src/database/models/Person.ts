import {Model} from 'objection'
import Animal from './Animals'
export default class Person extends Model{
    id! : number
    firstName! :string
    lastName! :string
    age! : number

    pets? : Animal[]
    children? : Person[]
    parent? : Person[]

    //REQUIRED
    static tableName = 'persons'
    static jsonSchema ={
        type: 'object',
        required: ['firstName','lastName'],
        properties: {
            id: {type : 'integer'},
            parentId : {type:['integer','null']},
            firstName : {type:'string'},
            lastName: {type:'string'},
            age: {type:'number'},
            
        }
    }
    static relationMappings =() => ({
        pets: {
            relation: Model.BelongsToOneRelation,
            modelClass: Animal,
            join:{
                from:'persons.id',
                to:'animals.ownerId'
            }
        },
        children: {
            relation: Model.BelongsToOneRelation,
            modelClass: Person,
            join:{
                from:'persons.id',
                to:'persons.parentId'
            }
        },
        parent: {
            relation: Model.BelongsToOneRelation,
            modelClass: Person,
            join:{
                from:'persons.parentId',
                to:'persond.id'
            }
        }
    })
}