console.clear();

const people = [
    {
        name: 'Petras',
        age: 99,
        isMarried: true,
    },
    {
        name: 'Maryte', 
        age: 87,
        isMarried: false,
    },
    {
        name: 'Ona', 
        age: 17,
        isMarried: true,
    },
    {
        name: 'Jonas', 
        age: 66,
        isMarried: false,
    },
];

const pn = people[1]['name'];
const pa = people[1]['age'];
const pm = people[1]['isMarried'];

console.log(pn);
console.log(pa);
console.log(pm);


//gender male / true
// gender female / false

const students = [
    {
        name: 'Petras',
        dob: 2015,
        marks: [],
        gender: true,
        responsibleHumans: [
            {
                name: 'Jonas',
                dob: 1999,
                phone: 86515154,
                address: {
                    city: 'Vilnius',
                    country: 'LTU',
                    street: 'Laisves pr.',
                    buildingNr: 1,
                    appartmenNr: 13,
                },
            },
        ],
    },
]

const respHumans = students[0]['responsibleHumans'];
console.log(respHumans);
for (const human of respHumans) {
    console.log(human['name'])
}