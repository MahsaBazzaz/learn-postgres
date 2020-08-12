// const Knex = require('knex')
// const connection = require('../knexfile')
// const knexConnection = Knex(connection)
// Model.knex(knexConnection)
import { Model } from 'objection';

export class Book extends Model {
    //REQUIRED
    static tableName = 'books';

    id: number;
    title: string;
    description: string;
    author: string;
    price: number;

    static jsonSchema = {
        type: 'object',
        required: ['title'],
        properties: {
            id: { type: 'integer' },
            title: { type: 'string' },
            description: { type: 'string' },
            author: { type: 'string' },
            price: { type: 'number' }
        }

    };
    static relationMappings = {
        author: {
            relation: Model.HasManyRelation,
            modelClass: __dirname + '/Person',
            join: {
                from: 'books.id',
                to: 'persons.favorite'
            }
        }
    };

}
