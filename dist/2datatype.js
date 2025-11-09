"use strict";
//* Js: string, number, boolean, null, undefined
//* Ts: never, unknown, any, void
Object.defineProperty(exports, "__esModule", { value: true });
let name = 'John';
let age = 30;
let isWorking = true; //* explicit type to boolean
let x = null;
let y = undefined;
let z; //? any
let z2 = undefined; //? any
let z3 = null; //? any
// name = 23;   //! error
console.log(name, age);
//# sourceMappingURL=2datatype.js.map