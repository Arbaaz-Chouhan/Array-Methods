const number = [1,2,3,4];
const result = number.some(item => item > 4)
console.log(result);

const persons = [
    {
        name : "Arbaaz",
        age : 17
    },

    {
        name : "danis",
        age : 18
    },

    {
        name : "Adnan",
        age :20
    }
]

const res = persons.some(item => item.age >=17); 
console.log(res);