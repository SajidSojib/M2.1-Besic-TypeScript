const user = {               
    firstName: 'John',
    middleName: 'Smith',
    lastName: 'Doe',
    age: 30,
    isWorking: true
}

const user2: {               
    firstName: string,
    middleName: string,
    lastName: string,
    age: number,
    isWorking: boolean
} = {
    firstName: 'John',
    middleName: 'Smith',
    lastName: 'Doe',
    age: 30,
    isWorking: true
}

const user3: {
  company: 'Google';         //? literal type
  firstName: string;
  middleName?: string;        //? optional type
  lastName: string;
  readonly age: number;       //? access modifier -> can set anything but can't change afterwards
  isWorking: boolean;
} = {
  firstName: "John",
  lastName: "Doe",
  company: "Moogle",         //? must be "Google"
  age: 30,
  isWorking: true,
};