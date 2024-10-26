const number1 = [1, 2, 3, 4, 5];
number1.forEach(consolItem);
function consolItem(item, index, arr) {
    console.log('a[' + index + '] = ' + item);
}

const number2 = [1, 2, 3, 4, 5, 10, 15, 25];
let sum = 0;
number2.forEach((arr) => {
    sum += arr;
});
console.log(sum)

const letter = ['a', 'b', 'c', 'a', 'd', 'e', 'f', 'b', 'a', 'b'];
let count = {};
letter.forEach(item => {
    if (count[item]) {
        count[item]++
    } else {
        count[item] = 1;
    }
})

console.log(count);


const number = [1, 2, 3, 1, 3, 1, 5, 2, 6, 3];
let count2 = {}
number.forEach(elm => {
    if (count2[elm]) {
        count2[elm]++;
    } else {
        count2[elm] = 1;
    }
})
console.log(count2);


