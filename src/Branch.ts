class Branch {
   
    constructor() {
       
    }



  // `findCustomer()`, has one parameter of type string (`id` of customer) and
   // returns a customer.
   // Return the customer if they exist, null otherwise.
   findCustomer(id: string):Customer | null{
    if (this.branches.some(b => b === branch && b.findCustomer(customer.id))) {
        return false;
    } else {
        const selectedBranch = this.branches.find(b => b === branch)
        selectedBranch?.addCustomer(customer) 
    }
}



}

export default Branch