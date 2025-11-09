//* Js: string, number, boolean, null, undefined (Primitive)
//* Js: object (non-primitive)
//* Ts: never, unknown, any, void, object, array

let name: string = 'John';
let age: number = 30;
let isWorking = true;           //* explicit type to boolean
let x: null = null;
let y: undefined = undefined;


let z;                       //? any
let z2 = undefined;          //? any
let z3 = null;               //? any

// name = 23;   //! error
console.log(name, age);