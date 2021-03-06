import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import {Book } from '../database/models/Book';
import {Person} from '../database/models/Person';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService,Book,Person],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  // it('it should return authors',async(done) => {
  //   let r = await service.getAuthorinfo(1);
  //   expect(r).toBeDefined;
  //   done();
  // })
});
