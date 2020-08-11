import {Module, Global } from '@nestjs/common';
import { Book} from './models/Book';
import {Person} from './models/Person'
import * as Knex from 'knex';
import * as  dotenv from 'dotenv';
import * as path from 'path';
import { knexSnakeCaseMappers, Model } from 'objection';

const envFilePath = path.resolve(__dirname + './../.env');
dotenv.config({ path: envFilePath });

const models = [Book, Person];

const modelProviders = models.map(model => {
  return {
    provide: model.name,
    useValue: model
  };
});

const providers = [
    ...modelProviders,
    {
      provide: 'KnexConnection',
      useFactory: async () => {
        const knex = Knex({
          client: 'pg',
          connection: 'postgres://postgres:mahsadb77@localhost:5432/mydatabase',
          // connection: process.env.DATABASE_URL, // FIX can't read in on runtime
          debug: process.env.KNEX_DEBUG === 'true',
          ...knexSnakeCaseMappers()
        });
  
        Model.knex(knex);
        return knex;
      }
    }
  ];

@Global()
@Module({
    providers: [...providers],
    exports: [...providers]
})
export class DatabaseModule {}
// hi from parham