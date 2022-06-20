const a = [1, 2, 3, 4, 1, 4, 2, 5, 7];

// 1

const b =[];
for(const n of a) {
    if (!b.includes(n)) {
        b.push(n);
    }
}
console.log(b);

console.log('------------');
// 2

const c1 = {};
const c2 = [];

for (n of a) {
    console.log(n);
    if (!(n in c1)) {
        c1[n] = 1;
    }
}

console.log(c1);
for (const key in c1) {
    c2.push(+key)
}

console.log(c2);

console.log('------------');
// 3

const d1 = {};

for (n of a) {
    console.log(n);
    if (!(n in d1)) {
        d1[n] = 1;
    }
}

console.log(d1);

const d2 = Object.keys(d1);

console.log(d2);


console.log('------------');
// 4

const rinkinys = new Set();
for (const n of a) {
    rinkinys.add(n)
}
console.log(rinkinys);
console.log(rinkinys.size);