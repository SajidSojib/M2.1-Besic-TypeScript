// union
type Role = 'admin' | 'moderator' | 'user';

const user1: Role = 'admin';
const user2: Role = 'moderator';
const user3: Role = 'user';


// intersection
type Employee = {
    name: string;
    age: number;
    salary: number;
}
type Manager = {
    designation: string;
    teamSize: number;
}
type ManagerAndEmployee = Employee & Manager;

const emp1: ManagerAndEmployee = {
    name: 'John',
    age: 30,
    salary: 50000,
    designation: 'Manager',
    teamSize: 5
}