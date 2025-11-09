function add(a, b) {        // implicit type to any  //!error
    return a + b;
}

function add2(a: number, b: number): number {        // explicit type to number
    return a + b;
}

const add3 = (a: number, b: number): number => {
    return a + b;
}


//* object -> function -> method
const user = {
    monsthlyIncome: 1000,
    monthlyExpense: 105,
    getBalance(value: number): number {
        return this.monsthlyIncome - this.monthlyExpense - value
    }
}

//* callback function
const arr: number[] = [1, 2, 3, 4, 5];
const sqrArr: number[] = arr.map((item: number): number => item * item);