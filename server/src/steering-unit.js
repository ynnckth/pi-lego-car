const LEFT = 'left';
const RIGHT = 'right';
const CENTER = 'center';

const SERVO_SIGNAL_PIN = 10;    // GPIO10, Pin #19


/**
 * The steering unit handles the left/right movement of the rover.
 */
class SteeringUnit {

    constructor(gpio) {
        this.motor = new gpio(SERVO_SIGNAL_PIN, {mode: gpio.OUTPUT});
    }

    /**
     * Controls the servo motor.
     * See https://github.com/fivdi/pigpio/blob/master/doc/gpio.md#servowritepulsewidth
     */
    steer(direction) {
        console.log("steering " + direction);
        switch (direction) {
            case LEFT:
                this.motor.servoWrite(2000);
                break;
            case CENTER:
                this.motor.servoWrite(1500);
                break;
            case RIGHT:
                this.motor.servoWrite(1000);
                break;
        }
    }

    static get LEFT() {
        return LEFT;
    }

    static get RIGHT() {
        return RIGHT;
    }

    static get CENTER() {
        return CENTER;
    }
}

module.exports = SteeringUnit;
