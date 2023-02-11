export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    console.log('Nome alterado com sucesso!')
  }
  getName = (): string => {
    return this.name
  }

  setBalance = (value: number): void => {
    this.balance += value
  }
  getBalance = (): void => {
    console.log(this.balance)
  }

  getStatus = ():boolean => {
    return this.status
  }

  deposit = (): void => {
    if(this.validateStatus()){
      console.log('Voce depositou')
    }
  }

  withdraw = (saque:number): void => {
    if(this.validateBalance(saque) && this.validateStatus()){
      this.balance - saque
      console.log('Saque realizado com sucesso!')
    } else {
      console.log('Saldo insuficiente!')
    }
  }

  private validateBalance = (valorSaque:number) => {
    if (valorSaque > this.balance){
      return true;
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
