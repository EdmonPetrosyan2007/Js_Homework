function sum_expenses(expenses) {
    let sum = 0;

    for (let i = 0; i < expenses.length; i++){
        sum += expenses[i];
    }
    return sum;
}

let expenses = [50, 75, 100];
console.log("Sum of expenses: " + sum_expenses(expenses));
