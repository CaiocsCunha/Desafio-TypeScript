import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value :number): void => {
    if(this.getStatus()){
      this.setBalance(value)
      console.log(`Voce pegou um empréstimo de R$ ${value}`)
    }else{
      console.log('Empréstimo indisponível.')
    }
  }
}
