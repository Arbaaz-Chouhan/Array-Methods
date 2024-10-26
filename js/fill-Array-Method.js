const number = [1,2,3,4,5,6];
number.fill(0)
console.log(number);

function fillItem (n){
    return Array(n)
    .fill(0)
    .map((_ , ind) => ind + 1);
}

console.log(fillItem(10));

