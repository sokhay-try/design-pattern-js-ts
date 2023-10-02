class Customer {
    name;
    constructor(name) {
        this.name = name;
    }
    update(subject) {
        console.log(`${this.name}, the product you want is back in stock.`);
    }
}
class Product {
    observers = [];
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const removeIndex = this.observers.findIndex(obs => observer === obs);
        if (removeIndex !== -1) {
            this.observers.splice(removeIndex, 1);
        }
    }
    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this);
        }
    }
    restock() {
        this.notifyObservers();
    }
}
const product = new Product();
const john = new Customer('John');
const jane = new Customer('Jane');
product.addObserver(john);
product.addObserver(jane);
product.restock();
product.removeObserver(john);
product.restock();
