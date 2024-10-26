const number = [1,2,3,4,5];
const res = number.findIndex(value => value === 3);
console.log(res);

const number1 = [10,20,25,30,35,40];
const total = number1.findIndex((value)=>{
    return value >= 39
})
console.log(total);