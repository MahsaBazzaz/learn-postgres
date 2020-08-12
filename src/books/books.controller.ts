import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import {Book} from '../database/models/Book'

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }

    @Get()
    async getBooks() {
        let books = await this.booksService.getBooks();
        return books;
    }

    @Get(':bookID')
    async getBook(@Param('bookID') bookID) {
        let book = await this.booksService.getBook(bookID);
        return book;
    }

    @Post()
    async addBook(@Body() book) {
        const b = await this.booksService.addBook(book);
        return b;
    }

    @Delete()
    async deleteBook(@Query() query) {
        const books = await this.booksService.deleteBook(query.bookID);
        return books;
    }


}
