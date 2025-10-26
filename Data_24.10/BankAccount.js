class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  
  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} amount --> new add balance ${this.balance}`);
  }

  
  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
      console.log(`${amount} withdrawn --> New add balance ${this.balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }
}


const user = new BankAccount("Anna", 150);


user.deposit(300);


user.withdraw(50);


console.log("User Balanse:", user.balance);
