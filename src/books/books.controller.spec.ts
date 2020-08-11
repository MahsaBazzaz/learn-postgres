import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import * as path from 'path';
import * as  dotenv from 'dotenv';
import { DatabaseModule } from '../database/database.module';
import { async } from 'rxjs';
const Knex = require('knex');
const knexConfig = require('../../knexfile')

const knex = Knex(knexConfig);


describe('Books Controller', () => {
  let controller: BooksController;
  let service: BooksService;

  beforeAll(async () => {
    let p = path.resolve(__dirname + '../../.env');
    dotenv.config({ path: p });
  });

  afterAll((done) => {
    knex.destroy();
    done();
  });

  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports : [DatabaseModule],
      controllers: [BooksController],
      providers:[BooksService]
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('[002] should load process.env.DATABASE_URL', () => {
    expect(process.env.DATABASE_URL).toBeDefined();
  });
  it('should return books from db',async(done) => {
    let result = await service.getBooks();
    expect(result).toBeDefined;
    done();
  })
  it('should return  a book from db',async(done) => {
    let result = await service.getBook(1);
    expect(result).toBeDefined;
    done();
  })
  it('should add a book to database',async(done) => {
    let r = await service.addBook({t: '6th book',desc:'this is 6th one',a:'mahsa',p:60000});
    expect(r).toBeDefined;
  })
  it('should remove a book from database',async(done) => {
    let r = await service.deleteBook(5);
    expect(r).toBeDefined;
  })
});
