// interface IBankAccount {
//     validateUserIdentity(): void;
//     calculateInterestRate(): void;
//     registerAccount(): void;
// }
// class PersonalAccount implements IBankAccount {
//     validateUserIdentity(): void {
//        console.log(">>>PersonalAccount validateUserIdentity")
//     }
//     calculateInterestRate(): void {
//         console.log(">>>PersonalAccount calculateInterestRate")
//     }
//     registerAccount(): void {
//         console.log(">>>PersonalAccount registerAccount")
//     }
// }
// class BusinessAccount implements IBankAccount {
//     validateUserIdentity(): void {
//         console.log(">>>BusinessAccount validateUserIdentity")
//     }
//     calculateInterestRate(): void {
//         console.log(">>>BusinessAccount calculateInterestRate")
//     }
//     registerAccount(): void {
//         console.log(">>>BusinessAccount registerAccount")
//     }
// }
// class Branch {
//     public openAccount(type: String): void {
//         let bankAccount: IBankAccount
//         if (type == 'P') {
//             bankAccount = new PersonalAccount()
//         }
//         else if (type == 'B') {
//             bankAccount = new BusinessAccount()
//         }
//         else {
//             console.log('>>>Invalid Type')
//         }
//         if (bankAccount) {
//             bankAccount.validateUserIdentity();
//             bankAccount.calculateInterestRate();
//             bankAccount.registerAccount();
//         }
//     }
// }
// class Main {
//     constructor(type: String) {
//         let branch: Branch = new Branch()
//         branch.openAccount(type)
//     }
// }
// let type = 'B'
// let main: Main = new Main(type)
