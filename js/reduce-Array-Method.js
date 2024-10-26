const numbers = [1,2,3,4,5];
const total = numbers.reduce((accumulator,value) =>{
    return accumulator + value;
})
console.log(total);


const numbers1 = [1,2,3,4,5,6,7];
const total1 = numbers1.reduce((accumulator,value) =>{
    if(accumulator > value ){
       return accumulator
    }else{
        return value
    }
})
console.log(total1);

