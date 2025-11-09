//* type alias -> re-use type

type User = {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  gender: "male" | "female";
  address: {
    city: string;
    country: string;
  };
};

const user1 : User = {
    name: {
        firstName: 'John',
        lastName: 'Doe'
    },
    age: 30,
    gender: 'male',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

const user2 : User = {
    name: {
        firstName: 'John',
        lastName: 'Doe'
    },
    age: 30,
    gender: 'male',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

//* function

type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b