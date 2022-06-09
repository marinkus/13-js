/*
TERNARY operator
supaprastintas if/else

null - neegzistuojanti reiksme einamuoji metu, kuria planuojame gauti
*/

let ats = null;
const a = 4;
const b = 22;

if (a > b) {
    ats = 'daugiau'
} else {
    ats = 'ne daugiau'
}

console.log(ats);

const tern = a > b ? 'daugiau' : 'ne daugiau';
console.log(tern);

const egz = 1 ? 2 ? 3 : 4 : 5;
console.log(egz);


/*
REIKSMIU POZITYVUMAS / NEGATYVUMAS
boolean
skaiciai: viskas TAIP isskyrus 0
null -> false
undefined -> false
'stringai' -> true
'' -> false

*/
if (0) {
    console.log('taip');
} else {
    console.log('ne');
}
console.log('-----break--------');
