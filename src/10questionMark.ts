// ? ternary operator
// ?? nullish coalescing operator -> null or undefined
// ?. optional chaining

const age = 20;
const canVote = age > 18 ? true : false;

const selectedTheme = 'dark';
const theme = selectedTheme ?? 'light';
console.log(theme);

const user: {
    name: string;
    address: {
        city: string;
        country: string;
        postalCode?: number;
    }
} = {
    name: 'John',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}
const postalCode = user?.address?.postalCode;     //? save from crash
console.log(postalCode);
