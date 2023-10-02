class Logger {

    static _instance: Logger

    constructor(
        private infoMessages: (String|number)[] = [],
        private warnMessages: (String|number)[] = [],
        private debugMessages: (String|number)[] = []
    ) {
    }
    
    static getInstance() {
        if(!this._instance) {
        this._instance = new Logger()
        }
        return this._instance
    }

    info(infoMsg: String|number) {
        this.infoMessages.push(infoMsg)
    }
    
    getInfo() {
        return this.infoMessages
    }

    warn(warnMsg: String|number) {
        this.warnMessages.push(warnMsg)
    }
    
    getWarn() {
        return this.warnMessages
    }

    debug(debugMsg: String|number) {
        this.debugMessages.push(debugMsg)
    }
    
    getDebug() {
        return this.debugMessages
    }
}

const instance1 = Logger.getInstance()
instance1.info("Instance1 set info Message")
console.log(instance1.getInfo())

const instance2 = Logger.getInstance()
instance1.info("Instance2 set info Message")
console.log(instance2.getInfo())

const instance3 = Logger.getInstance()
instance1.warn("Instance3 set warn Message")
console.log(instance3.getWarn())
console.log(instance3.getInfo())