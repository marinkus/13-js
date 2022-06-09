/*
ARRAY (kompleksinis duomenu tipas)
ltu: masyvas, sarashas, matrica (daugiamatis masyvas)

*/

const students = ['Petras', 'Ona', 'Kazys', 'Jonas', 'Nabuchodonosaras'];
const marks = [10, 2, 8, 6, 4];
console.log(marks);

const sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count = marks.length;

const average = sum / count;
console.log('Vidurkis', average);

const random = [7, 777, 'labas', 9, true, 'rytas', false];