import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { Book } from '../database/models/Book'
import { Person } from '../database/models/Person'


@Injectable()
export class BooksService {
    constructor(@Inject('Book') private model: ModelClass<Book>) { }
    async getBooks(): Promise<any> {
        return await this.model.query();
    }

    async getBook(id: number): Promise<Book> {
        return await this.model.query().findById(id);
    }

    async addBook(book): Promise<Book> {
        return await this.model.query().insert({
            title: book.t,
            description: book.desc,
            author: book.a,
            price: book.p
        });
    }
    async deleteBook(bookID): Promise<any> {
        let id = Number(bookID);

        return await this.model.query().deleteById(bookID);

    }

}
