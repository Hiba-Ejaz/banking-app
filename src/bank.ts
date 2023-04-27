import Branch from "./Branch";
import Customer from "./Customer";
import InterfaceTransaction from "./Transaction";

class Bank {
    private branches: Branch[] 
    private name:string
    constructor( name: string) {
        this.branches= []
        this.name= name
    } 
    addBranch(branch: Branch):boolean {
        if(!(this.branches.some((element) => element === branch))) {
            this.branches.push(branch)
            return true;
        }
        else
        return false;
    }
    addCustomer(branch:Branch,customer:Customer):boolean{
        if (this.branches.some(b => b === branch && b.findCustomer(customer.id))) {
            return false;
        } else {
            const selectedBranch = this.branches.find(b => b === branch)
            return (selectedBranch?.addCustomer(customer)) 
        }
    }
    addCustomerTransaction(branch:Branch,customerId:string,transactionAmount:number):boolean{  
        return (this.branches.some(b => b === branch)).addCustomerTransaction(customerId,transactionAmount)  
    }
findBranchByName(branchName:string):Branch[] | null{  
    return this.branches.filter(b => b.getName() === branchName);
}
checkBranch(branchOfBank:Branch):boolean{  
     if(this.branches.filter(b => b === branchOfBank).getName()){
        return true
     }
     else return false
}
//`listCustomers()`, 
//has two parameters, branch and boolean and 
//returns a boolean.
 //Return true if the branch exists or false otherwise. 
//This method prints out a list of customers with transaction details if second parameter is true.
listCustomers(branch:Branch,bool:boolean):boolean{
if(this.branches.some((b)=>b===branch)){
    if(bool){
        const customers: string[] = branch.getCustomers()
       customers.forEach((customer)=>
       console.log(customer,customer.getTransactions())
    }
    return true
}
else{
    return false
}  
}    
}

export default Bank