
const SteeringUnit = require('./steering-unit');

const ACTION_EVENT = 'action';
const ACCELERATE = 'ACCELERATE';
const STOP = 'STOP';
const STEER_LEFT = 'LEFT';
const STEER_RIGHT = 'RIGHT';
const STEER_CENTER = 'STEER_CENTER';


class ControlUnit {

    constructor(io, gpio) {
        this.io = io;
        this.steeringUnit = new SteeringUnit(gpio);
    }

    start() {
        this.io.on('connection', (socket) => {
            socket.on(ACTION_EVENT, (action) => {
                switch (action.command) {
                    case ACCELERATE:
                        console.log('accelerating...');
                        // TODO: accelerate max
                        break;
                    case STOP:
                        console.log('stopping throttle');
                        // TODO: stop accelerating
                        break;
                    case STEER_LEFT:
                        this.steeringUnit.steer(SteeringUnit.LEFT);
                        break;
                    case STEER_RIGHT:
                        this.steeringUnit.steer(SteeringUnit.RIGHT);
                        break;
                    case STEER_CENTER:
                        this.steeringUnit.steer(SteeringUnit.CENTER);
                        break;
                    default:
                        break;
                }
            });
        });
    }
}

module.exports = ControlUnit;