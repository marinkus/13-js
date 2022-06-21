const n1 = Math.random();

console.log(n1);

function randomBetween(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

const stats = {};
for (let i=0; i < 1000; i++) {
    // console.log(randomBetween(4, 7));
    const n = randomBetween(10, 20);
    if (n in stats) {
        stats[n]++
    } else {
        stats[n] = 1
    }
}
console.log(stats);