
console.clear();

const family = [
    {
        name: 'Petras',
        age: 99,
        children: [
            {
            name: 'Rimas',
            age: 125,
        },
        {
            name: 'Maryte',
            age: 66,
        },
        ],
    },
    {
        name: 'Rita',
        age: 120,
        children: [
            {
                name: 'Rimagardas',
                age: 140,
            },
            {
                name: 'Ramas',
                age: 21,
                children: [],
            },
        ],
    },
];

function oldest(list) {
    let age = 0;
    let name = '';
    for (const person of list) {
        if (person.age > age) {
            age = person.age;
            name = person.name;
        }
        if (person.children && person.children.length > 0) {
            const oldestChild = oldest(person.children);
            const parts = oldestChild.split(' ');
            const childName = parts[0];
            const childAge = +parts[2];
            if (childAge > age) {
                age = childAge;
                name = childName;
            }
        }
    }
    return `${name} is ${age} years old`;
}

console.log(oldest(family)); //Rimagardas is 140 years old