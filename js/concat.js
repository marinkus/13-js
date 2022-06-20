const a = [1, 2, 3];
const b = [4, 5, 6];

console.log('a: ', a);
console.log('b: ', b);

const c = a.concat(b);
const d = [...a, ...b];

console.log('c: ', c);
console.log('d: ', d);

const g = [a + b];
console.log(g);
const h = a + b;
console.log(h);