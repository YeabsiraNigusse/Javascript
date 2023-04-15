const account = {
    name: 'Yeabsira Nigusse',
    expenses: [],
    Income: [],

    addExpense: function(amount, disc){
        this.expenses.push({
            amount:amount,
            discription:disc
        })
   },

   getAccountSummery: function(){
    let totalExpense = 0
    let totalIncome = 0

    for (let i = 0; i<this.expenses.length; i++){
        totalExpense =  totalExpense + this.expenses[i].amount
    }
    
    this.Income.forEach(function(income){
        totalIncome = totalIncome + income.amount
    })
    return `${this.name} has a balance of ${totalIncome - totalExpense}. $${totalIncome} in income. $${totalExpense} in Expenses`
}, 


   addIncome: function(disc, amount){
    this.Income.push({
        amount:amount,
        discription:disc
    })  
}
}


account.addExpense(250, 'Rent')
account.addExpense(50, 'Coffe')
account.addIncome('Job', 1000)
console.log(account.getAccountSummery())
