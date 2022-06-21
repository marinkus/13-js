
console.clear();

const family = [
    {
        name: 'Petras',
        age: '99',
        children: [
            {
            name: 'Rimas',
            age: '25',
        },
        {
            name: 'Maryte',
            age: '66',
        },
        ],
    },
    {
        name: 'Rita',
        age: '87',
        children: [
            {
                name: 'Rimagardas',
                age: '140',
            },
            {
                name: 'Ramas',
                age: '21',
                children: [],
            },
        ],
    },
];

function oldest(list) {
    let age = 0;
    for (const person of list) {
        if (person.age > age) {
            age = person.age
        }
        if (person.children && person.children.length > 0) {
            const oldestChild = oldest(person.children);
            if (oldestChild > age) {
                age = oldestChild
            }
        }
        return age
    }
}

console.log(oldest(family)); //Rimagardas is 140 years old