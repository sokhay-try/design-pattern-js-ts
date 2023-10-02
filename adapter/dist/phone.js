/**
 * I use Iphone but forget take charger
 * And I ask my friend but he has only Andriod charger
 * So we need adapter for connect from android charger to iphone
 */
class PilotPen {
    mark(str) {
        console.log('>>>Mark::', str);
    }
}
class PenAdapter {
    pilotPen;
    constructor(pilotPen) {
        this.pilotPen = pilotPen;
    }
    write(str) {
        this.pilotPen.mark(str);
    }
}
class AssignmentWork {
    p;
    setP(p) {
        this.p = p;
    }
    getP() {
        return this.p;
    }
    writeAssignment(str) {
        this.p.write(str);
    }
}
let penAdapter = new PenAdapter(new PilotPen());
let assign = new AssignmentWork();
assign.setP(penAdapter);
assign.writeAssignment('Learn Adapter pattern');
