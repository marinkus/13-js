console.clear();

const str = 'Labas rytas Lietuva';
const words = str.split(' ');
const wordCount = words.length;
console.log(words);
console.log(wordCount);

const str2 = 'Vasara';
const words2 = str2.split('a');
console.log(words2);

const person = 'Vardernis Pavardenis';
const parts = person.split(' ').map(s => s[0]);
console.log(parts);

const inicialai = parts.join('.') + '.';
console.log(inicialai);

const person2 = 'Vardernis Pavardenis';
const inicialai2 = person2.split(' ').map(s => s[0]).join('.') + '.';
console.log(inicialai2);

let incialai2 = person[0];
for (let i = 1; i < person.length; i++) {
    const letter = person[i];
    if (person[i-1] === ' ') {
        incialai2 += '.' + letter;
    }
}
incialai2 += '.';
console.log(incialai2);