class BankAccountFactory {
}
class ForeignBankAccountFactory extends BankAccountFactory {
    createAccount(AccType) {
        let bankAccount = null;
        if (AccType == 'P') {
            bankAccount = new ForeignPersonalAccount();
        }
        else if (AccType == 'B') {
            bankAccount = new ForeignBusinessAccount();
        }
        else {
            console.log('>>>Invalid Account Type');
        }
        return bankAccount;
    }
}
class LocalBankAccountFactory extends BankAccountFactory {
    createAccount(AccType) {
        let bankAccount = null;
        if (AccType == 'P') {
            bankAccount = new PersonalAccount();
        }
        else if (AccType == 'B') {
            bankAccount = new BusinessAccount();
        }
        else {
            console.log('>>>Invalid Account Type');
        }
        return bankAccount;
    }
}
class ForeignPersonalAccount {
    validateUserIdentity() {
        console.log(">>>ForeignPersonalAccount validateUserIdentity");
    }
    calculateInterestRate() {
        console.log(">>>ForeignPersonalAccount calculateInterestRate");
    }
    registerAccount() {
        console.log(">>>ForeignPersonalAccount registerAccount");
    }
}
class ForeignBusinessAccount {
    validateUserIdentity() {
        console.log(">>>ForeignBusinessAccount validateUserIdentity");
    }
    calculateInterestRate() {
        console.log(">>>ForeignBusinessAccount calculateInterestRate");
    }
    registerAccount() {
        console.log(">>>ForeignBusinessAccount registerAccount");
    }
}
class PersonalAccount {
    validateUserIdentity() {
        console.log(">>>PersonalAccount validateUserIdentity");
    }
    calculateInterestRate() {
        console.log(">>>PersonalAccount calculateInterestRate");
    }
    registerAccount() {
        console.log(">>>PersonalAccount registerAccount");
    }
}
class BusinessAccount {
    validateUserIdentity() {
        console.log(">>>BusinessAccount validateUserIdentity");
    }
    calculateInterestRate() {
        console.log(">>>BusinessAccount calculateInterestRate");
    }
    registerAccount() {
        console.log(">>>BusinessAccount registerAccount");
    }
}
class Branch {
    bankAccountFactory;
    constructor(bankAccountFactory) {
        this.bankAccountFactory = bankAccountFactory;
    }
    openAccount(AccType) {
        let bankAccount;
        bankAccount = this.bankAccountFactory.createAccount(AccType);
        if (bankAccount) {
            bankAccount.validateUserIdentity();
            bankAccount.calculateInterestRate();
            bankAccount.registerAccount();
        }
    }
}
class Main {
    constructor(AccType, bankAccountFactory) {
        let branch = new Branch(bankAccountFactory);
        branch.openAccount(AccType);
    }
}
let AccType = 'C';
let main = new Main(AccType, new LocalBankAccountFactory);
let AccType2 = 'P';
let main2 = new Main(AccType2, new ForeignBankAccountFactory);
