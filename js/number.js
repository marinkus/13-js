/*
NUMBERS:
"normalus":
- sveikieji
- desimtainiai

"nenormalus":
- ne skaicius
- begalybes

*/

// sveikas
const a = 0;

// desimtainis
const b = 3.14;

// neigiami
const c = -7;

const d = Infinity;
const e = -Infinity;

//ne skaicius, kuris yra skaicius

const f = NaN; // not-a-number

console.log(7 / 5);
console.log(-7 / 5);
console.log('septyni' / 'penki');

console.log(1 / 0);

let skaicius = 10;
skaicius = skaicius + 3;
skaicius += 3;
console.log('Skaicius', skaicius);

console.log(2 ** 8); // kelimas laipsniu

console.log(Math.PI);
console.log(Math.E);
console.log('------');
console.log(Math.abs(7));
console.log(Math.abs(-7));

console.log(Math.ceil(3.0001)); // didesnis sveikasis skaicius
console.log(Math.floor(3.00001)); // zemesnissveikasis skaicius
console.log(Math.round(3.5)); // apvalinimas

console.log(Math.pow(2, 4));  // tas pats kas ** operatorius, pakelimas laipsniu (2 ** 4)

console.log(Math.max(1, 10, 7, 5)); // ima didziausia reiksme
console.log(Math.min(1, 10, 7, 5)); // ima maziausia reiksme

console.log(Math.random()); // generuoja random skaiciu [0..1)

console.log(Math.sqrt(81)); // kvadratine saknis

console.log(Math.trunc(3.477)); // ignoruoja skaitmenis po kablelio

