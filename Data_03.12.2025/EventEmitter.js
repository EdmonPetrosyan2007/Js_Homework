class EventEmitter {
    constructor () {
       this.events = {};
    }
    start () {
        console.log("start");
    }

    stop () {
        console.log("stop");
    }
}

class GameEngine extends EventEmitter {
    constructor () {
        super();
    }
    play () {
        this.start();
        console.log("Game is playing...");
        this.stop();
    }
    pause (callback) {  
        setTimeout(() => {
            callback();
            super.stop();
        }, 5000);
    }
}

const game = new GameEngine();
game.play();
game.pause(() => {
    console.log("Game is paused.");
});
module.exports = { EventEmitter, GameEngine };
