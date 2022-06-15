/*

Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console


Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

*/

const a = 5;
console.log(a);
const b = 5;
console.log(b);
const c = 7;
console.log(c);

console.log('--Kita uzduotis--');

const a1 = 'pirmas';
console.log(a1);
const b1 = 'antras';
console.log(b1);
const c1 = 'trecias';
console.log(c1);

console.log('--Susumuoti abc--');

const abc = a + b + c;
console.log(abc);

console.log('--Sujungti zodzius su tarpu--');
const abc1 = `${a1} ${b1} ${c1}`
console.log(abc1);

console.log('--Palyginimai--');

if (a >= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (a > c) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

const skaiciai = [15, 55, 31, 7, 6]
const seka = `${skaiciai[0]} - ${skaiciai[1]} + ${skaiciai[2]} - ${skaiciai[3]} + ${skaiciai[4]}`;
console.log(seka);

const zodziai = ['arabas', 'buvo', 'balvonas'];
console.log(`${zodziai[0]}, ${zodziai[1]}, ${zodziai[2]}`);
console.log(zodziai.join(', '));

let sk = 0;
for (let i = 0; i <= 4; i++) {
    sk += i;
}
console.log(sk);

let didesnisSkaicius = 0;
for (let i = 574; i <= 815; i++) {
    didesnisSkaicius +=i;
}
console.log(didesnisSkaicius);
let didSkaicius = 0;
for (let i = -50; i <= 50; i++) {
    didSkaicius +=i;
}
console.log(didSkaicius);


const abcd = 'abcdef';
let dcba = '';
for (let i = abcd.length -1; i >= 0; i--) {
    dcba += abcd[i];
}
console.log(dcba);

const zodis = 'voratinklis';
let naujasZodis = '';
for (let i = zodis.length -1; i >= 0; i--) {
    naujasZodis += zodis[i];
}
console.log(naujasZodis);

function multiply(num1, num2) {
    console.log(num1, num2);
    console.log(num1 * num2);
}

const sk1 = 5;
const sk2 = 8;
const daug = multiply(sk1, sk2);
console.log(daug);

