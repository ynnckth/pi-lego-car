
const steeringUnit = require('./steering-unit');

const ACTION_EVENT = 'action';
const THROTTLE = 'THROTTLE';
const STEER_LEFT = 'LEFT';
const STEER_RIGHT = 'RIGHT';
const STOP_STEERING = 'STOP_STEERING';
const STOP_THROTTLE = 'STOP_THROTTLE';


class CommandListener {

    constructor(io) {
        this.io = io;
    }

    startListening() {
        this.io.on('connection', (socket) => {
            socket.on(ACTION_EVENT, (action) => {
                switch (action.command) {
                    case THROTTLE:
                        console.log('accelerating...');
                        // TODO: accelerate max
                        break;
                    case STOP_THROTTLE:
                        console.log('stopping throttle');
                        // TODO: stop accelerating
                        break;
                    case STEER_LEFT:
                        steeringUnit.steer(SteeringUnit.LEFT);
                        break;
                    case STEER_RIGHT:
                        steeringUnit.steer(SteeringUnit.RIGHT);
                        break;
                    case STOP_STEERING:
                        steeringUnit.returnToCenter();
                        break;
                    default:
                        break;
                }
            });
        });
    }
}

module.exports = CommandListener;