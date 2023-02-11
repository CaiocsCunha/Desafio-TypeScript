import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { OtherAccount } from './class/OtherAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Caio', 10)
// peopleAccount.deposit()
// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// console.log(companyAccount)
const otherAccount : OtherAccount = new OtherAccount('Caio',1)
// console.log(otherAccount)
otherAccount.depositar(100)
console.log(otherAccount.getBalance())