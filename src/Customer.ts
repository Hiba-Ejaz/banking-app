import Transaction from "./Transaction";
class Customer {
   private name: string;
    private id : string;
    private transactions: Transaction[];
    constructor(name: string) {
      this.name = name;
       const randomNumber = Math.random().toString();
        const timestamp = new Date().getTime().toString();
        this.id = `${randomNumber}${timestamp}`;
         this.transactions = [];
    }
    get getname() {
        return this.name
    }
    get getId() {
        return this.id
    }
     get getTransactions() {
          return this.transactions;
    }
     getBalance(): number {
          let balance = 0;
          for (const transaction of this.transactions) {
            balance+= transaction.amount;
          }
          return balance;
        }
       addTransactions(amount: number): boolean {
          const newBalance = this.getBalance() + amount;
          if (newBalance < 0) {
            return false;
          }
          const transaction = {
            amount: amount,
            date: new Date()
          };
          this.transactions.push(transaction);
          return true;
        }
  }

export default Customer