// object destructuring
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

const { name, age:boyos, address: { city:sohor, country } } = user;

console.log(boyos, sohor, name);


// array destructuring
const arr = [1, 2, 3,4,5];
const [, , c] = arr;
console.log( c);