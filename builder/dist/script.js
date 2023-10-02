class PhoneBuilder {
    os;
    ram;
    processor;
    screenSize;
    battery;
    setOs(os) {
        this.os = os;
        return this;
    }
    setProcessor(processor) {
        this.processor = processor;
        return this;
    }
    setRam(ram) {
        this.ram = ram;
        return this;
    }
    setScreenSize(screenSize) {
        this.screenSize = screenSize;
        return this;
    }
    setBattery(battery) {
        this.battery = battery;
        return this;
    }
    getPhone() {
        return new Phone(this.os, this.ram, this.processor, this.screenSize, this.battery);
    }
}
class Phone {
    os;
    ram;
    processor;
    screenSize;
    battery;
    constructor(os, ram, processor, screenSize, battery) {
        this.os = os;
        this.ram = ram;
        this.processor = processor;
        this.screenSize = screenSize;
        this.battery = battery;
    }
}
class Shop {
    static buyPhone() {
        return new PhoneBuilder();
    }
}
let buyIphone = Shop.buyPhone().setOs('IOS').setRam(16).getPhone();
console.log(">>>buyIphone:::", buyIphone);
let buyAndriod = Shop.buyPhone().setOs('Andriod').setRam(16).setScreenSize(12).getPhone();
console.log(">>>buyAndriod:::", buyAndriod);
