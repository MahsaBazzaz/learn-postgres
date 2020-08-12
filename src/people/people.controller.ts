import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { PeopleService } from './people.service';
import {Person } from '../database/models/Person'

@Controller('people')
export class PeopleController {
    constructor(private peopleService: PeopleService) { }

    @Get()
    async getBooks() {
        let books = await this.peopleService.getPeople();
        return books;
    }

    @Get(':personID')
    async getBook(@Param('bookID') bookID) {
        let book = await this.peopleService.getPerson(bookID);
        return book;
    }

    @Post()
    async addBook(@Body() person) {
        const b = await this.peopleService.addPerson(person);
        return b;
    }

    @Delete()
    async deleteBook(@Query() query) {
        const books = await this.peopleService.deletePerson(query.personId);
        return books;
    }
}
