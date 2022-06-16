const text = 'Labas rytas Lietuva';

function charCount(str) {
    const raides ={
    };
    for(const symbol of str) {
        if (raides[symbol]) {
            raides[symbol]++;
        } else {
        raides[symbol] = 1
    }
}
    return raides;
}

console.log(charCount(text));

const bigText = 'asdoii qjiowe se as ojisc pjoas pojadw tu pjow se pjawddjopad pjoasd se jopadw pjoadw';

function wordCount(str) {
    const uniquesWords = {};
    const words = str.split(' ');

    for(const word of words) {
        if (uniquesWords[word]) {uniquesWords[word]++} else {uniquesWords[word] = 1;
        }
    }
    return uniquesWords
}

console.log(wordCount(bigText));

const dic = wordCount(bigText);
for (const key in dic) {
    console.log(key, '->', dic[key])
}