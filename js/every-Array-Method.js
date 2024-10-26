const  number = [1,2,3,4,5,6];
const result = number.every(item=>  item >0)
console.log(result);


const persons = [
    {
        name : "Arbaaz"
    },
    {
        name : "Adnan"
    },
    
    {
        name : "danis"
    },
    
    {
        name : "fayaz"
    },
    

]
const res = persons.every(person => person.name !== undefined);
console.log(res);


const number1 = [[1,2,3],[4,5],6];
const ck = number1.every(item=> Array.isArray(number1))
console.log(ck);