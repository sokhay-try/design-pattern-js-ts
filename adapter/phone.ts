/**
 * I use Iphone but forget take charger
 * And I ask my friend but he has only Andriod charger
 * So we need adapter for connect from android charger to iphone
 */

interface Pen {
    write(str: String): void
}

class PilotPen {

    public mark(str: String): void {
        console.log('>>>Mark::', str)
    }
}

class PenAdapter implements Pen {

    constructor(
        private pilotPen: PilotPen
    ) {

    }

    write(str: String): void {
        this.pilotPen.mark(str)
    }
}

class AssignmentWork {
    private p: Pen

    public setP(p: Pen): void {
        this.p = p
    }

    public getP(): Pen {
        return this.p
    }

    public writeAssignment(str: String) {
        this.p.write(str)
    }
}

let penAdapter = new PenAdapter(new PilotPen())
let assign = new AssignmentWork()

assign.setP(penAdapter)
assign.writeAssignment('Learn Adapter pattern')