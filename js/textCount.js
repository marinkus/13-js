const texts = [
    '',
    'labas rytas',
    'labas rytas Lietuva',
];

function wordCount(str) {
    if (str === '') {
        return 0;
    }

    const words = str.trim().split(' ').filter(w => w !== '');
    
    return words.length;
}

for (const text of texts) {
    const count = wordCount(text)
    console.log(count, `"${text}"`);
}


// let count = 0;
// for (const word of words) {
//     if (word !== '') {
//         count++
//     }