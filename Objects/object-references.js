let myaccount = {
    name: 'Yeab',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount){
    account.expenses = account.expenses + amount
}

// addIncome
let addIncome = function(account, income){
    account.income = account.income + income

}
let getaccountsummery = function (account){
    return `${account.name} has total income $${account.income} and has total expenses $${account.expenses} so his balance is ${account.income - account.expenses} `
        
}
let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

addIncome(myaccount, 100)
addExpense(myaccount, 10)
addExpense(myaccount, 23)
console.log(getaccountsummery(myaccount))
resetAccount(myaccount)
console.log(getaccountsummery(myaccount))