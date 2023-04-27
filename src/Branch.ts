import Customer from "./Customer"

class Branch {
    private name:string
    private customers:Customer[]
    constructor(name:string) {
        this.name=name
        this.customers=[] 
    }
get getName(){
    return this.name;
}
get getCustomers(){
    return this.customers;
}
addCustomer(customer:Customer):boolean{
    if(this.customers.some((c)=>c===customer)){
        return false
    }
    else{
    this.customers.push(customer);
    return true
}
}
//- `addCustomerTransaction()`, has a parameter of type string (id of customer), a number (for transaction) 
//and returns a boolean. Returns true if the customers transaction is added successfully or false otherwise.
addCustomerTransaction(customerId: string, transactionNumber: number): boolean {
    const customer = this.customers.find(c => c.getId() === customerId);
    if(customer?.addTransaction(transactionNumber)){
      return true;
    } else {
      return false;
    }
  }
findCustomer(id: string):Customer | null{
const customer=this.customers.find(c => c.getId()===id)
    if(customer===undefined) {
        return null
    } else {
       return customer;
    }
}
}

export default Branch