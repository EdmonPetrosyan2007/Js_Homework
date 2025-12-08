class  LoggerContract {
    constructor (text) {
        if (new.target === LoggerContract) {
            throw new Error("== abstract class LoggerContract Error ==");
        }
        this.text = text;
    }    
    log(text) {
        throw new Error("this method log() implement");
    }
    warn(text) {
        throw new Error("this method warn() implement");
    }
    error(text) {
        throw new Error("this method error() implement");
    }
}
 
class ConsoleLogger extends LoggerContract {
    log(text) {
        console.log(`log--> ${text}`);
    }
    warn(text) {
        console.warn(`warn--> ${text}`);
    }
    error(text) {
        console.error(`error--> ${text}`);
    }
}

class MemoryLogger extends LoggerContract {
    constructor() {
        super();
        this.maps = [];
    }
    log(text) {
        this.maps.push(`log--> ${text}`);
    }
    warn(text) {
        this.maps.push(`warn--> ${text}`);
    }
    error(text) {
        this.maps.push(`error--> ${text}`);
    }
}

const consoleLogger = new ConsoleLogger();
consoleLogger.log("This is a log text");
consoleLogger.warn("This is a warning text");
consoleLogger.error("This is an error text");

console.log("<-- Object keep -->");


const memoryLogger = new MemoryLogger();    
memoryLogger.log("Memory log text");
memoryLogger.warn("Memory warning text");
memoryLogger.error("Memory error text");
console.log(memoryLogger.maps);