const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(elm => {
    return elm % 2 == 0
});
console.log(even);


const peaple = [
    {
        name: "Arbaaz",
        age: 26
    },

    {
        name: "Arman",
        age: 18
    },

    {
        name: "javed",
        age: 16
    },


]
const adults = peaple.filter(person => person.age >= 18);
console.log(adults);


const number = [1, 2, 3, 2, 1, 3, 3, 4, 5, 6];
const nums = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});
console.log(nums);