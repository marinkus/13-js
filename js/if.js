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


Loginiai operatoriai
&& (and) - turi tenkinti visos salygos
|| (or) - turi tenkinti bent viena salyga

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


const diena = 5;
if (diena === 1) {
    console.log('pirmadienis');
} else {
    if (diena === 2) {
        console.log('antradienis');
    } else {
        if (diena === 3) {
        console.log('treciadienis');
    } else {
        if (diena === 4) {
            console.log('ketvirtadienis');
        } else {
            if (diena === 5) {
                console.log('penktadienis');
            }
        }
    }
}
}

console.log('--------------------------------------');

const day = 5;
if (day === 1) {
    console.log('pirmadienis')
} else if (day === 2) {
    console.log('antradienis');
} else if (day === 3) {
    console.log('treciadienis');
} else if (day === 4) {
    console.log('ketvirtadienis');
} else if (day === 5) {
    console.log('penktadienis');
} else if (day === 6) {
    console.log('sestadienis');
} else if (day === 7) {
    console.log('sekmadienis');
} else {
    console.log('Tokia diena savaiteje neegzistuoja');
}

console.log('------------------BREAK-------------');

const temperatura = 18;
const lietus = true;
const nuoKadaSilta = 12;

if (lietus === true) {
    console.log('pasiimk sketi');
} else {
    if (temperatura >= nuoKadaSilta) {
    console.log('gali eiti su maike');
    } else {
        console.log('pasiimk striuke');
    }
}
console.log('------------------&& || -------------');
if (lietus === true && temperatura >= nuoKadaSilta) {
    console.log('2) varom nuogi');
} else if (lietus === true && temperatura < nuoKadaSilta) {
    console.log('2) pasiimk palta ir sketi');
} else if (lietus === false && temperatura >= nuoKadaSilta) {
    console.log('2) eik su maike');
} else if (lietus === false && temperatura < nuoKadaSilta) {
    console.log('2) vistiek pasiimk striuke');
} else {
    console.log('nesamone...');
} // jeigu vietoj true/false suvedam lempa 'kkdsf0302'

console.log('------------------````` ------------');