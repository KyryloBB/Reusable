'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    {name: 'Kyrylo', phone: '+380972577672'},
    {name: 'Nykyta', phone: '+380966512449'},
    {name: 'Johny',  phone: '+380972415773'},
];

const findPhoneByName = (name) =>{
    for(const person of phonebook) {
        if(person.name == name) return person.phone;
    }
};

module.exports = { phonebook, findPhoneByName };
