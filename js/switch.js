/*
SWITCH
salygu palyginimas, beveik kaip if () {}
*/

const day = 13;
switch (day) {
    case 1:
        console.log('Pirmadienis');
        break;

    case 2:
        console.log('Antradienis');
        break;

    case 3:
        console.log('Treciadienis');
        break;

    case 4:
        console.log('Ketvirtadienis');
        break;

    case 5:
        console.log('Penktadienis');
        break;

    case 6:
        console.log('Sestadienis');
        break;

    case 7:
        console.log('Sekmadienis');
        break;

    default:
        console.log('Tokios dienos savaiteje nera');
        break;

}

const weekday = 2;

switch (weekday) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        break;
    case 6:
    case 7:
        console.log('Savaitgalis');
        break;
    default:
    console.log('Tokios dienos savaiteje nera');
        break;

}

if (weekday === 1
    || weekday ===2
    || weekday ===3
    || weekday ===4
    || weekday ===5
    ) {
        console.log('Darbo diena');
    } else if (weekday === 6
       || weekday === 7
        ) {
            console.log('Savaitgalis');}