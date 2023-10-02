class SimpleCoffee {
    cost() {
        return 1;
    }
    description() {
        return "Simple coffee";
    }
}
class CoffeeDecorator {
    coffee;
    constructor(coffee) {
        this.coffee = coffee;
    }
}
/**
 * =========================== Implement CoffeeDecorator ===============
 */
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 0.5;
    }
    description() {
        return this.coffee.description() + ", milk";
    }
}
class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 0.2;
    }
    description() {
        return this.coffee.description() + ", sugar";
    }
}
class WhippedCreamDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 0.7;
    }
    description() {
        return this.coffee.description() + ", whipped cream";
    }
}
class CaramelDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 0.6;
    }
    description() {
        return this.coffee.description() + ", caramel";
    }
}
let coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
coffee = new WhippedCreamDecorator(coffee);
coffee = new CaramelDecorator(coffee);
console.log(`Cost: $${coffee.cost()}`); // Outputs: Cost: $3.0
console.log(`Description: ${coffee.description()}`); // Outputs: Description: Simple coffee, milk, sugar, whipped cream, caramel
