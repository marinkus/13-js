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