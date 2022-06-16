const n1 = '7';
const n2 = 5;
function suma(a, b) {
    const initialASize = ('' + a).length;
    const initialBSize = ('' + b).length; // toString **
console.log(initialASize);
    if (typeof a !== 'number') 
    {a = parseInt(a)}
    if (typeof b !== 'number') 
    {
    b = parseInt(b)}
    return a + b;
}

const ats = suma(n1, n2);
console.log(ats)

module.exports = suma;