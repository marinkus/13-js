console.clear();

const list = [1, 3, 5, 10, 7, 3.14, 13, 4];

function max(list) {
    let maxNumber = -Infinity;
    for (const n of list) {
        if (Array.isArray(n)) {
            const maxChild = max(n);
            if (maxChild > maxNumber) {
                maxNumber = maxChild
            }
        } else {
        if (typeof n !== 'number'
        || !isFinite(n)) {
            continue;
        }
        if (n > maxNumber) {
            maxNumber = n
        }
    }
}
    if (maxNumber === -Infinity) {
        return 'ERROR'
    }
    return maxNumber;
}


const l1 = ['rytas', 13, 4];
console.log(max(l1), "->", 13);
const l2 = ['labas', 5];
console.log(max(l2), '->', 5);
const l3 = [true, []];
console.log(max(l3), '->', 'ERROR');
const l4 = [''];
console.log(max(l4), '->', 'ERROR');

const l5 = [5,[33, 4], 13, 4];
console.log(max(l5), "->", 33);