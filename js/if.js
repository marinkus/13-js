/*

SALYGOS SAKINYS

sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ..... else if () {}
if () {} else if () {} ..... else if () {} .... else {}

Palyginimo operatoriai:
visi: > < >= <= == != ===, !==
naudotini: > < >= <= ===, !==
nenaudotini: == !=

*/

const a = 3;
const b = 35;
console.log("START");

if (a > b) {
    console.log('Pirmas yra daugiau uz antra')
} else {
    console.log('Pirmas nera daugiau uz antra');
}
console.log("ZE END")

console.log("---------------")

const temp = 5;

if (temp > 12) {
    console.log('Siandien silta');
} else {
    console.log('nelabai');
}

const x = '5'; // == negriezta lygybe
if (x === 5) {
    console.log('TAIP');
}
else {
    console.log('NE');
}
