/*
CIKLAI:
for, for-of, for-in, foreach, while, do-while, map, filter, reduce, sort...

SABLONAS
for () {}
*/

const kupiuros = [20, 5, 50, 100, 20];

let pinigine = 0;

for (let i = 0; i < kupiuros.length; i++) {   // ++ tas pats +=1
    const kupiura = kupiuros[i]
    pinigine += kupiura;
    console.log(i, ')', kupiura, '=', pinigine);
}
    console.log(pinigine);

console.log('--------------');

const a = 'sssssssssss';
console.log(a.length);


const word = 'vasara';
for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    console.log(i, ')', letter);
}

console.clear();

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}
console.log('----------');

const money = [5, 10, 20, 50, 100, 5, 10, 20];
const minTarget = 80;
const hand = [];
let handTotal = 0;

for (let i = 0; i < money.length; i++) {
    const value = money[i];
    handTotal += value;
    hand.push(value)
    console.log(value);
    if (handTotal >= minTarget) {
        break;
    }
}
console.log(handTotal)

const graza = handTotal - minTarget;
if (graza > 0) {
    console.log(`Graza: ${graza}`);
    console.log(`Duotos kupiuros ${hand}`);
}