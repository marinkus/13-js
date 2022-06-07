"use strict";

/*
Kintamuju iniciavimo budai:
const - kai verte negali keistis (default)
let - kai verte norime, jog galetu keistis
var - senasis budas {nenaudoti, jei nenori problemu}
*/

const username = 'Ozys';

let pinigine = 0;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = 2;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = pinigine + 1;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = pinigine * 2;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

const a = 7;
const b = 5;

console.log(a, '+', b, '=', a + b);
console.log(a, '-', b, '=', a - b);
console.log(a, '/', b, '=', a / b);
console.log(a, '*', b, '=', a * b);

let skaicius = 10;
skaicius = skaicius + 3;
skaicius += 3;
console.log('Skaicius', skaicius);

