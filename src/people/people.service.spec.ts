import { Test, TestingModule } from '@nestjs/testing';
import { PeopleService } from './people.service';
import {Book } from '../database/models/Book';
import {Person} from '../database/models/Person';

describe('BooksService', () => {
  let service: PeopleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleService,Book,Person],
    }).compile();

    service = module.get<PeopleService>(PeopleService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  // it.only('it should return books',async(done) => {
  //   let r = await service.getBooksinfo(1);
  //   expect(r).toBeDefined;
  //   done();
  // })
});
