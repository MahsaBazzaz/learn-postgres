import 'dotenv/config';
import * as Knex from 'knex';
// const pg = require('pg')

module.exports = {
  client: 'pg',
  connection: 'postgres://postgres:mahsadb77@localhost:5432/bookstore',
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
} as Knex.Config;
