console.clear();

const input = '341653153623454370504092959761693723403309078348669691385334383245011170753962791135643860277594103819123227988443653265606407336652574935823227343524361106';

function pairCount(str) {
    const ats = Array(100).fill(0);
    for (let i = 0; i < str.length - 1; i++) {
        const current = str[i];
        const next = str[i + 1];
        const index = parseInt(current + next);
        ats[index]++;
    }
    return ats;
}

function max(list) {
    const biggest = [...list].sort((a, b) => a - b)[0];
    const ats = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] === biggest) {
            ats.push(i)
        }
    }
    return ats
}

const pairs = pairCount(input);
const maxList = max(pairs);
console.log(pairs);
console.log(pairs.sort((a, b) => a - b));
