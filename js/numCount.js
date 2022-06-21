console.clear();

function numCount(n) {
    if (typeof n !== 'number'
    || !isFinite(n)) {
        return 'ERROR: turi buti skaicius'
    }

    const numAsString = '' + n;
    let size = numAsString.length;
// eliminuojame minusa
    if (n < 0) {
        size--;
    }
// eliminuojame kableli
    if (n % 1 !==0) {
        size--;
    }

    return size;

    // if (n > 0){
    //     return ('' + n).replace('.', '').length;
    // } else {
    //     return ('' + n * -1).replace('.', '').length;
    // }
}

console.log(numCount(1), '->', 1);
console.log(numCount(15), '->', 2);
console.log(numCount(131), '->', 3);
console.log(numCount(222.22), '->', 5);
console.log(numCount(13.1), '->', 3);
console.log(numCount(22222), '->', 5);
console.log(numCount(13.1), '->', 3);
console.log(numCount(22.222), '->', 5);
console.log(numCount(131), '->', 3);
console.log(numCount(22222), '->', 5);
console.log(numCount('Labas rytas'));
console.log(numCount(''));
console.log(numCount(null));
console.log(numCount(true));
console.log(numCount(false));
console.log(numCount('0'));