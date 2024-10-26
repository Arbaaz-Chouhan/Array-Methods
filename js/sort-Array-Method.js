const alphabet = ["D","J","E","I","C","A","F","B"];
alphabet.sort();
console.log(alphabet);

const number = [ 4, 6, 5, 7, 2, 3, 1];
number.sort()
console.log(number);

const products = [
    {
        name :"Arbaaz",
        price :1000
    },

    {
        name :"fayaz",
        price :1500
    },

    {
        name :"Arman",
        price :500
    },
]

products.sort((a,b) => a.price - b.price);
console.log(products);