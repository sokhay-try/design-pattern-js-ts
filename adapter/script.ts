/**
 * I use Iphone but forget take charger
 * And I ask my friend but he has only Andriod charger
 * So we need adapter for connect from android charger to iphone
 */

interface ICharger {
    plug(): void
}

class AndriodCharger {

    plug(): void {
        console.log('>>>andriod plug')
    }
}

class PhoneAdapter implements ICharger {

    constructor (private andriodCharger: AndriodCharger) {

    }

    plug(): void {
        this.andriodCharger.plug()
    }
}

class ChargeIPhone {
    private charger: ICharger

    public setCharger(charger: ICharger): void {
        this.charger = charger
    }

    public getCharger(): ICharger {
        return this.charger
    }

    public plug() {
        this.charger.plug()
    }
}

let phoneAdapter = new PhoneAdapter(new AndriodCharger())
let chargeIPhone = new ChargeIPhone()

chargeIPhone.setCharger(phoneAdapter)
chargeIPhone.plug()