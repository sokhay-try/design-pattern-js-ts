interface IBankAccount {
    validateUserIdentity(): void;
    calculateInterestRate(): void;
    registerAccount(): void;
}

abstract class BankAccountFactory {
    abstract createAccount(AccType: String): IBankAccount | null;
}

class ForeignBankAccountFactory extends BankAccountFactory {

    createAccount(AccType: String): IBankAccount | null {

        let bankAccount: IBankAccount | null = null;

        if (AccType == 'P') {
            bankAccount = new ForeignPersonalAccount()
        }
        else if (AccType == 'B') {
            bankAccount = new ForeignBusinessAccount()
        }
        else {
            console.log('>>>Invalid Account Type')
        }
        return bankAccount
    }
    
}

class LocalBankAccountFactory extends BankAccountFactory {

    createAccount(AccType: String): IBankAccount | null {

        let bankAccount: IBankAccount | null = null;

        if (AccType == 'P') {
            bankAccount = new PersonalAccount()
        }
        else if (AccType == 'B') {
            bankAccount = new BusinessAccount()
        }
        else {
            console.log('>>>Invalid Account Type')
        }
        return bankAccount
    }
    
}

class ForeignPersonalAccount implements IBankAccount {

    validateUserIdentity(): void {
       console.log(">>>ForeignPersonalAccount validateUserIdentity")
    }

    calculateInterestRate(): void {
        console.log(">>>ForeignPersonalAccount calculateInterestRate")
    }

    registerAccount(): void {
        console.log(">>>ForeignPersonalAccount registerAccount")
    }

}

class ForeignBusinessAccount implements IBankAccount {

    validateUserIdentity(): void {
        console.log(">>>ForeignBusinessAccount validateUserIdentity")
    }

    calculateInterestRate(): void {
        console.log(">>>ForeignBusinessAccount calculateInterestRate")
    }
    
    registerAccount(): void {
        console.log(">>>ForeignBusinessAccount registerAccount")
    }

}

class PersonalAccount implements IBankAccount {

    validateUserIdentity(): void {
       console.log(">>>PersonalAccount validateUserIdentity")
    }

    calculateInterestRate(): void {
        console.log(">>>PersonalAccount calculateInterestRate")
    }

    registerAccount(): void {
        console.log(">>>PersonalAccount registerAccount")
    }

}

class BusinessAccount implements IBankAccount {

    validateUserIdentity(): void {
        console.log(">>>BusinessAccount validateUserIdentity")
    }

    calculateInterestRate(): void {
        console.log(">>>BusinessAccount calculateInterestRate")
    }
    
    registerAccount(): void {
        console.log(">>>BusinessAccount registerAccount")
    }

}

class Branch {

    constructor(private bankAccountFactory: BankAccountFactory) {}

    public openAccount(AccType: String): void {

        let bankAccount: IBankAccount

        bankAccount = this.bankAccountFactory.createAccount(AccType)
        
        if (bankAccount) {
            bankAccount.validateUserIdentity();
            bankAccount.calculateInterestRate();
            bankAccount.registerAccount();
        }
    }

}

class Main {
    constructor(AccType: String, bankAccountFactory: BankAccountFactory) {
        let branch: Branch = new Branch(bankAccountFactory)
        branch.openAccount(AccType)
    }
}

let AccType = 'C'
let main: Main = new Main(AccType, new LocalBankAccountFactory)

let AccType2 = 'P'
let main2: Main = new Main(AccType2, new ForeignBankAccountFactory)

