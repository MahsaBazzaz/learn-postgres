import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import * as path from 'path';
import * as  dotenv from 'dotenv';
import { DatabaseModule } from '../database/database.module';
const randomstring = require("randomstring");
let rn = require('random-number');
let gen = rn.generator({
  min: 0
  , max: 70
  , integer: true
});

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
      imports: [DatabaseModule],
      controllers: [BooksController],
      providers: [BooksService]
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
  it('should return books from db', async (done) => {
    let result = await service.getBooks();
    expect(result).toBeDefined;
    done();
  })
  it('should return  a book from db', async (done) => {
    let result = await service.getBook(14);
    expect(result).toBeDefined;
    done();
  })
  it('should add a book to database', async (done) => {
    let mytitle = randomstring.generate(6);
    let mydesc = randomstring.generate(10);
    let myauthor = randomstring.generate(5);
    let myprice = gen();
    let r = service.addBook({ t: mytitle, desc: mydesc, a: myauthor, p: myprice });
    await expect(r).resolves.toBeDefined;
    done();
  })
  // it('should remove a book from database',async(done) => {
  //   let r = await service.deleteBook(6)
  //   await expect(r).toBe(1);
  //   done();
  // })
});
