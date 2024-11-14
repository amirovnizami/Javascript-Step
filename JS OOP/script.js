class Account{
    #balance

    constructor(balance){
        this.#balance = balance
    }

    cashIn(amount){
        this.#balance +=amount
    }
    cashOut(amount){
        this.#balance -=amount
    }
    showBalance(){
        console.log(this.#balance)
    }
}

const myAccount = new Account(1000);

myAccount.cashIn(1000)
myAccount.cashIn(50)
myAccount.cashOut(50)
myAccount.showBalance()