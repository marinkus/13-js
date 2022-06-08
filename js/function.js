/*

FUNCTION:
logikos gabalas, kuri galim/norim perpanaudoti

- gali gauti parametrus {pradines salygos}
- visada grazina savo rezultata:
    - mes galime nurodyti koki rezultata grazinti
    - jeigu nenurodysime, tai bus grazintas  "default'inis" rezultatas
        - "default'inis" rezultatas yra undefinied


*/

function sumavimas(a, b) {  
    return a + b;
}
function dalyba(a, b) {  
    return a / b;
}
function daugyba(a, b) {  
    return a * b;
}

const n1 = 5;
const n2 = 7;
const rez1 = sumavimas(n1, n2);
const d1 = daugyba(n1, n2);
const d2 = dalyba(n1, n2);
console.log(rez1);
console.log(d1);
console.log(d2);

const n3 = 41;
const n4 = 24;
const rez2 = sumavimas(n3, n4);
console.log(rez2);



