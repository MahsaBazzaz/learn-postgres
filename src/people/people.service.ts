import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { Person } from '../database/models/Person'


@Injectable()
export class PeopleService {
    constructor(@Inject('Person') private model: ModelClass<Person>) { }
    async getPeople(): Promise<any> {
        return await this.model.query();
    }

    async getPerson(id: number): Promise<Person> {
        return await this.model.query().findById(id);
    }

    async deletePerson(personID): Promise<any> {
        return await this.model.query().deleteById(personID);

    }

    async addPerson(person): Promise<Person> {
        let tmp =  await this.model.query().insert({
            name: person.firstName,
            family: person.lastName,
            age: person.age,
            city: person.city,
        });
        return tmp;
    }
    async getcity(pID) : Promise<any>{
        let info = await this.model.query()
        .select('city')
        .findById(pID)
        return info;
    }
    async getfavoriteBook(PID) : Promise<any>{
        let favbook = await this.model.query().findById(PID).withGraphFetched('favorite');
        return favbook;
    }

}
