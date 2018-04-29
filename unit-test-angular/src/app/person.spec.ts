import { Person } from './person';

describe('Test for person', () => {
    let person;

    // Arrange;
    person = new Person(
        'nicolas',
        'molina',
        23,
        40,
        1.65
    );

    describe('Test for data', () => {
        it('attributes', () => {
            expect(person.name).toEqual('nicolas');
            expect(person.lastname).toEqual('molina');
            expect(person.age).toEqual(23);
            expect(person.weight).toEqual(40);
            expect(person.height).toEqual(1.65);
        });
    });

    describe('Test for calcIMC', () => {
        it('Should return a String: down', () => {
            expect(person.calcIMC()).toEqual('down');
        });
        it('Should return a String: normal', () => {
            person.weight = 58;
            expect(person.calcIMC()).toEqual('normal');
        });
        it('Should return a String: overweigth', () => {
            person.weight = 68;
            expect(person.calcIMC()).toEqual('overweigth');
        });
        it('Should return a String: overweigth level 1', () => {
            person.weight = 75;
            expect(person.calcIMC()).toEqual('overweigth level 1');
        });
        it('Should return a String: overweigth level 2', () => {
            person.weight = 90;
            expect(person.calcIMC()).toEqual('overweigth level 2');
        });
        it('Should return a String: overweigth level 3', () => {
            person.weight = 120;
            expect(person.calcIMC()).toEqual('overweigth level 3');
        });
        it('Should return a String: no found', () => {
            person.weight = -48;
            expect(person.calcIMC()).toEqual('no found');
            person.weight = -48;
            person.height = -1.70;
            expect(person.calcIMC()).toEqual('no found');
        });
    });

});
