import 'dotenv/config';
import * as Knex from 'knex';
// const pg = require('pg')

module.exports = {
  client: 'pg',
  connection: 'postgres://postgres:mahsadb77@localhost:5432/mydatabase',
  migrations: {
    directory: '../database/migrations',
  },
  seeds: {
    directory: '../database/seeds',
  },
} as Knex.Config;
