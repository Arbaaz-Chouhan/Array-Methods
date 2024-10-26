// map Method
const number = [1, 2, 3, 4, 5];
const sq = [];
for (let i = 0; i < number.length; i++) {
    sq[i] = number[i] * number[i]
}
console.log(sq);



const numbers = [1, 2, 3, 4, 5];

function squre(value) {
    return value * value;
}
const b = numbers.map(squre);
console.log(b);

// Easy Method  
const numbers1 = [1, 2, 3, 4];
const res = numbers1.map(value => value * value)
console.log(res);


// const num = [1,2,3,4];

// const obj ={ 
//     name: 'value'
// };
// const item = num.map((value) =>{
//     console.log(this);
// return value * value
// }, obj)
// console.log(item);

// filter Method

// const filter = [1,3,4,8,6,7,];
// let total =[];
// for(let i = 0; i < filter.length; i++){
//     if(filter[i] > 5){
//      total.push(filter[i])

//     }
// }

// console.log(filter);
const filter = [1, 3, 4, 8, 6, 7,];
function greaterThan5(value) {
    return value > 5
}
const result = filter.filter(greaterThan5)

console.log(result);

const fil = [1, 2, , 6, 7, 5, 4, 2];
const res1 = fil.filter((value) => value > 5);
console.log(res1);

// find

const user = [
    {
        name: "Arbaaz",
        age: 17
    },

    {
        name: "Adanan",
        age: 20
    },

    {
        name: "jamil khan",
        age: 30
    },
]

const r = user.find((user)=> user.name === "Arbaaz");
console.log(r);

// reduce

const cart = [
    {
        name : "Lapatop",
        price :1000
    },

    {
        name : "Mouse",
        price : 500
    },

    {
        name : "Keyboard",
        price :800
    },

]

function total(accumulator ,item){
    return accumulator + item.price
}
 const d = cart.reduce(total, 0)
 console.log(d);

