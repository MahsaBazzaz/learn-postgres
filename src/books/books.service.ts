import {HttpException, Injectable} from '@nestjs/common';
import {BOOK} from '../models/Book';

@Injectable()
export class BooksService {
    books = BOOK;

    getBooks(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.books);
        });
    }

    getBook(bookID): Promise<any> {
        let id = Number(bookID);
        return new Promise(resolve => {
            const book = this.books.find(book => book.id === id);
            if (!book) {
                throw new HttpException('Book does not exist!', 404);
            }
            resolve(book);
        });
    }

    addBook(book): Promise<any> {
        return new Promise(resolve => {
            this.books.push(book);
            resolve(this.books);
        });
    }

    deleteBook(bookID): Promise<any> {
        let id = Number(bookID);
        return new Promise(resolve => {
            let index = this.books.findIndex(book => book.id === id);
            if (index === -1) {
                throw new HttpException('Book does not exist!', 404);
            }
            this.books.splice(1, index);
            resolve(this.books);
        });
    }

}
