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
