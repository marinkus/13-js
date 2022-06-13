const marks = [10, 2, 8, 4, 6];

const minMark = Math.min(...marks);
console.log(minMark);

const maxMark = Math.max(...marks);
console.log(maxMark);

const pirmas = [7, 8, 9];
const antras = [77, 88, 99];

const pirmasAntras = [...pirmas, ...antras];
const antrasPirmas = [...antras, ...pirmas ];
console.log(pirmasAntras);
console.log(antrasPirmas);

const pirmoKopija = pirmas;
console.log(pirmoKopija);

pirmoKopija[0] = 'labas';
console.log(pirmoKopija);

console.log('--------------');

const mokiniai = ['Petras', 'Maryte', 'Alius'];
console.log(mokiniai);

const mokiniuKopija = mokiniai;
console.log(mokiniuKopija);

mokiniuKopija[0] = 'Algis';
console.log(mokiniai);
console.log(mokiniuKopija);