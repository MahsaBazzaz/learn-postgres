import {Model} from 'objection'
import Person from './Person'

export default class Animal extends Model{
    id! : number
    name! :string
    owner? :Person

    //REQUIRED
    static tableName = 'animals'

    static jsonSchema = {
        type : 'object',
        required: ['name'],

        properties:{
            id : {type : 'integer'},
            ownerId: {type:['integer','null']},
            name: {type:'string'}
        }
    }
    static relationMappings = () => ({
        owner: {
            relation: Model.BelongsToOneRelation,
            modelClass: Person,
            join:{
                from: 'animals.ownerId',
                to: 'persons.id'
            }
        }
    })
}