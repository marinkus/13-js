// function declaration
function sudetis(a, b) {
    return a + b;
}
console.log('sudetis', sudetis(7, 5));

// anonimine funkcija
const atimtis = function (a, b) {
    return a - b;
}
console.log('atimtis', atimtis(7, 5));

const a = 7;
const b = 5;

const plotas = a !== b ? function (a, b) { return a * b} : function (a) { return a * a}

// arrow (rodykline) function
// kai logikos bloke yra TIK 1 procedura, tai nenaudojam {} ir return
const daugyba = (a, b) =>  a * b;
console.log(7, '*', 5, '=', daugyba(7, 5));

// arrow (rodykline) function
// kai logikos bloke yra TIK 1 parametras, tai nenaudojam ()
const kvadratas = a =>  a ** 2;
console.log(7, '**', 2, '=', kvadratas(7));

