class PhoneBuilder {

    private os: String;
    private ram: Number;
    private processor: String;
    private screenSize: Number; 
    private battery: Number;

    public setOs(os: String) {
        this.os = os
        return this;
    }

    public setProcessor(processor: String) {
        this.processor = processor
        return this;
    }

    public setRam(ram: Number) {
        this.ram = ram
        return this;
    }

    public setScreenSize(screenSize: Number) {
        this.screenSize = screenSize
        return this;
    }

    public setBattery(battery: Number) {
        this.battery = battery
        return this;
    }

    public getPhone(): Phone {
        return new Phone(this.os, this.ram, this.processor, this.screenSize, this.battery)
    }

}

class Phone {
    private os: String;
    private ram: Number;
    private processor: String;
    private screenSize: Number; 
    private battery: Number;

    constructor(
        os: String,
        ram: Number,
        processor: String,
        screenSize: Number,
        battery: Number
    ) {
        this.os = os;
        this.ram = ram;
        this.processor = processor;
        this.screenSize = screenSize;
        this.battery = battery
    }
}

class Shop {
    static buyPhone(): PhoneBuilder {
        return new PhoneBuilder()
    }
}

let buyIphone: Phone = Shop.buyPhone().setOs('IOS').setRam(16).getPhone()
console.log(">>>buyIphone:::", buyIphone)

let buyAndriod: Phone = Shop.buyPhone().setOs('Andriod').setRam(16).setScreenSize(12).getPhone()
console.log(">>>buyAndriod:::", buyAndriod)