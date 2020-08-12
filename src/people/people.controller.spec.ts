import { Test, TestingModule } from '@nestjs/testing';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
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
  let controller: PeopleController;
  let service: PeopleService;

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
      controllers: [PeopleController],
      providers: [PeopleService]
    }).compile();

    controller = module.get<PeopleController>(PeopleController);
    service = module.get<PeopleService>(PeopleService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('[002] should load process.env.DATABASE_URL', () => {
    expect(process.env.DATABASE_URL).toBeDefined();
  });
  it('should return people from db', async (done) => {
    let result = await service.getPeople();
    expect(result).toBeDefined;
    done();
  })
  it('should return  a person from db', async (done) => {
    let result = await service.getPerson(18);
    expect(result).toBeDefined;
    done();
  })
  it('should add a person to database', async (done) => {
    let myfirst = randomstring.generate(6);
    let mylast = randomstring.generate(6);
    let myage = gen();
    let mycity = randomstring.generate(4);
    let r = await service.addPerson({firstName: myfirst, lastName: mylast, age: myage,city:mycity});
    expect(r).resolves.toBeDefined;
    done();
  })
  // it('should remove a person from database',async(done) => {
  //   let r = await service.deletePerson(8);
  //   expect(r).toBe(1);
  //   done();
  // })
  it('should return a city',async(done) => {
    let r = await service.getcity(5);
    expect(r).toBeDefined;
    done();
  })
  it('should return favorite book',async(done) => {
    let r = await service.getfavoriteBook(2);
    expect(r).toBeDefined;
    done();
  })
});
