
const FORWARD = 'forward';
const BACKWARD = 'backward';
const STOP = 'stop';


/**
 * The engine unit handles the forward/backwards movement of the rover.
 */
class EngineUnit {

    constructor(gpio) {

    }

    move(direction) {
        switch (direction) {
            case FORWARD:
                break;
            case BACKWARD:
                break;
            default:
                break;
        }
    }

    stop() {

    }

    static get FORWARD() { return FORWARD; }
    static get BACKWARD() { return BACKWARD; }
    static get STOP() { return STOP; }
}

module.exports = EngineUnit;