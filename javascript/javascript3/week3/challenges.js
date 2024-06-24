class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

const user1 = new Person("Zlata", 18);
user1.introduce();

class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (this.balance > amount) {
      this.balance -= amount;
    } else {
      console.log(`You only have ${this.balance} in your account`);
    }
  }
  getBalance() {
    console.log(`Current balance is ${this.balance}`);
  }
}
const account1 = new BankAccount(1234, "Tanya", 100);
account1.deposit(10);
account1.getBalance();
account1.withdraw(50);
account1.getBalance();
account1.withdraw(100);
