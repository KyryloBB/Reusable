'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */
const Desmond = {name: 'Desmond Miles'};

const fn = (person) => {
    const Altair = {name: "Altair Ibn-La'Ahad"};
    let Ezio = {name: 'Ezio Auditore'};

    Altair.name = 'Basim';
    Ezio.name = 'Edward Kenway';

    Altair = Desmond; 
    /* object Desmond won't be assigned to the Altair, 
    because object Altair is a constant*/
    Ezio = Desmond;
};

module.exports = { fn };
