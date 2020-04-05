const user = {
    name: "Jeff",
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {

        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for (transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            count.credit++
        } else {
            count.debit++
        }
    }

    return count
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })
createTransaction({ type: "credit", value: 65 })
createTransaction({ type: "credit", value: 128 })
createTransaction({ type: "debit", value: 35 })
createTransaction({ type: "debit", value: 21 })

console.log(`balance: ${user.balance}`)
console.table(user.transactions)

console.log(getHigherTransactionByType("credit"))
console.log(getHigherTransactionByType("debit"))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())