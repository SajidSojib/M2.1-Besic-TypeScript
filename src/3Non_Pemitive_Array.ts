//* array 

const bazarList = ['apple', 'banana', 'orange', 'grapes'];      // implicit type to string[]
// bazarList.push(123);              //! error

const bazarList2: string[] = ['apple', 'orange', 'grapes'];

const arrMix: (string | number)[] = ['apple', 45, 'grapes', 123];
// arrMix.push(true);                //! error



//? tuple - fixed length array with fixed type with fixed order

const user: [number, string] = [1, 'John'];
// const user2: [number, string] = [1, 'John', 'Doe'];   //! error - too many elements

const couple: [string,string] = ['Husband', 'Wife'];