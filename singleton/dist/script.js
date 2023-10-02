class Logger {
    infoMessages;
    warnMessages;
    debugMessages;
    static _instance;
    constructor(infoMessages = [], warnMessages = [], debugMessages = []) {
        this.infoMessages = infoMessages;
        this.warnMessages = warnMessages;
        this.debugMessages = debugMessages;
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new Logger();
        }
        return this._instance;
    }
    info(infoMsg) {
        this.infoMessages.push(infoMsg);
    }
    getInfo() {
        return this.infoMessages;
    }
    warn(warnMsg) {
        this.warnMessages.push(warnMsg);
    }
    getWarn() {
        return this.warnMessages;
    }
    debug(debugMsg) {
        this.debugMessages.push(debugMsg);
    }
    getDebug() {
        return this.debugMessages;
    }
}
const instance1 = Logger.getInstance();
instance1.info("Instance1 set info Message");
console.log(instance1.getInfo());
const instance2 = Logger.getInstance();
instance1.info("Instance2 set info Message");
console.log(instance2.getInfo());
const instance3 = Logger.getInstance();
instance1.warn("Instance3 set warn Message");
console.log(instance3.getWarn());
console.log(instance3.getInfo());
