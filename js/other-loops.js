/*

*/

const marks = [10, 2, 8, 6, 4];

// iprastas for
console.log('for');
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    console.log(mark);
}

// for-of
console.log('for-of');
for (const mark of marks) {
    console.log(mark);
}

// while
console.log('while');
let i = 0;
while (i < marks.length) {
    const mark = marks [i];
    console.log(mark);
    i++;
}

// do-while
console.log('do-while');
let i2 = 0;
do {
    const mark = marks [i2];
    console.log(mark);
    i2++;
}
while (i2 < marks.length);

// foreach

console.log('foreach');
marks.forEach(mark => {
    console.log(mark);
})

// map - kaip modifikuoti kiekviena nari marks.map
console.log('map');
const rezMap = marks
    .map(mark => mark * 2)
    .map(mark => mark > 10 ? 10 : mark);
console.log(marks);
console.log(rezMap);

const rezMap2 = marks
    .map(mark => mark * 2 > 10 ? 10 : mark * 2);
console.log(marks);
console.log(rezMap2);

console.log('filter');
const filterMarks = marks.filter(mark => mark > 5);
console.log(filterMarks);

console.log('filter');
const filterMarks2 = marks.filter(mark => mark > 2 && mark < 7);
console.log(filterMarks2);

// map & filter combo

console.log('map & filter combo------');
const mapFilter = marks
    .map(mark => mark * 2)
    .filter(mark => mark > 5);

console.log(marks);
console.log(mapFilter);

// reduce (subendrinti)

console.log('reduce');
const sumReduce = marks.reduce((total, mark) => total + mark);
const sumReduce20 = marks.reduce((total, mark) => total + mark, 20);
console.log(sumReduce);
console.log(sumReduce20);

const difReduce = marks.reduce((total, mark) => total - mark);
const difReduce20 = marks.reduce((total, mark) => total - mark, -20);
console.log(difReduce);
console.log(difReduce20);

