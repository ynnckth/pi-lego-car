const SteeringUnit = require('./steering-unit');
const EngineUnit = require('./engine-unit');


/**
 * The control unit receives commands (steering and acceleration) from the client to maneuver the car.
 */
class ControlUnit {

    constructor(io, gpio) {
        this.io = io;
        this.steeringUnit = new SteeringUnit(gpio);
        this.engineUnit = new EngineUnit(gpio);
    }

    /**
     * Starts listening to commands from the client
     * and delegates them to the corresponding unit.
     */
    init() {
        this.io.on('connection', (socket) => {
            socket.on('action', (action) => {

                switch (action.command) {
                    case EngineUnit.FORWARD:
                    case EngineUnit.BACKWARD:
                        this.engineUnit.move(action.command);
                        break;
                    case EngineUnit.STOP:
                        this.engineUnit.stop();
                        break;
                    case SteeringUnit.LEFT:
                    case SteeringUnit.CENTER:
                    case SteeringUnit.RIGHT:
                        this.steeringUnit.steer(action.command);
                        break;
                    default:
                        console.log('Received unknown command %s', action.command);
                        break;
                }
            });
        });
    }
}

module.exports = ControlUnit;