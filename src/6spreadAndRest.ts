//* Spread operator => split

const frinds = ['John', 'Jane', 'Doe'];
const scleFrinds = ['Rohim', 'Karim'];

// frinds.push(scleFrinds);    //? ['John', 'Jane', 'Doe', ['Rohim', 'Karim']]
frinds.push(...scleFrinds);  //? ['John', 'Jane', 'Doe', 'Rohim', 'Karim']


const user = { name: 'John', age: 30 };
const otherInfo = { city: 'Dhaka', country: 'Bangladesh' };

const userInfo = { ...user, ...otherInfo };  //? { name: 'John', age: 30, city: 'Dhaka', country: 'Bangladesh' }


//* Rest operator => merge

const sum = (a: number, b: number) => {     // can only get 2 parameters
    return a + b;
}

const sum2 = (...args: number[]) => {       // can get any number of parameters amd merge to array
    console.log(args);
    return args.reduce((acc, item) => acc + item, 0);
}

console.log(sum2(1,2,3,4,5));