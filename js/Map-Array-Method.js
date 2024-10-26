const number1 = [1, 2, 3, 4, 5,];
console.log(number1);

const number2 = [1, 2, 3, 4, 5,];
const total1 = number2.map((value, item, index) => {
    return value * 2;
})
console.log(total1);


const number3 = [1, 2, 3, 4, 5];
const total2 = number3.map((value, index, item) => {
    return value * index;
})
console.log(total2);

const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    },

    {
        name : 'laptop',
        price: 1500,
        count: 5
    },

    {
        name: 'laptop',
        price: 500,
        count: 10
    },

];

const multiply = products.map(item => item.price * item.count)
console.log(multiply);

const totalProductsValue = products.map((item) => {
    name : item.name
    totalValue : item.price * item.count
});

console.log(totalProductsValue);


const str  = ["1","2","3","4","5"];
const  number = str.map(Number);
console.log(number);