/**
 * I use Iphone but forget take charger
 * And I ask my friend but he has only Andriod charger
 * So we need adapter for connect from android charger to iphone
 */
class AndriodCharger {
    plug() {
        console.log('>>>andriod plug');
    }
}
class PhoneAdapter {
    andriodCharger;
    constructor(andriodCharger) {
        this.andriodCharger = andriodCharger;
    }
    plug() {
        this.andriodCharger.plug();
    }
}
class ChargeIPhone {
    charger;
    setCharger(charger) {
        this.charger = charger;
    }
    getCharger() {
        return this.charger;
    }
    plug() {
        this.charger.plug();
    }
}
let phoneAdapter = new PhoneAdapter(new AndriodCharger());
let chargeIPhone = new ChargeIPhone();
chargeIPhone.setCharger(phoneAdapter);
chargeIPhone.plug();
