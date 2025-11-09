//* Js: string, number, boolean, null, undefined (Primitive)

let name: string = 'John';      // explicit type to string
let age: number = 30;
let isWorking = true;           // implicit type to boolean
let x: null = null;
let y: undefined = undefined;


let z;                       //? any
let z2 = undefined;          //? any
let z3 = null;               //? any

// name = 23;   //! error
console.log(name, age);