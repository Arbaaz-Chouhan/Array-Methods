const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = number.find(elm => elm > 2);
console.log(res);
    

const persons = [
    {
        name: 'Arbaaz',
        age: 17
    },

    {
        name: 'Adnan',
        age: 24
    },

    {
        name: 'Danis',
        age: 20
    },

    {
        name: 'fayaz',
        age: 18
    }
];
const result = persons.find(elm => elm.name === 'Arbaaz')
console.log(result);