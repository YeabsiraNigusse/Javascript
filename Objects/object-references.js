let myaccount = {
    name: 'Yeab',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount){
    account.expenses = account.expenses + amount
    console.log(account.expenses)
}

addExpense(myaccount, 10)