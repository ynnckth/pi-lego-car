
const LEFT = 'left';
const RIGHT = 'right';
const CENTER = 'center';
const MAX_STEERING_DURATION = 500;  // in millis

const GPIO_PIN = 10;

class SteeringUnit {

    constructor(gpio) {
        this.motor = new gpio(GPIO_PIN, {mode: gpio.OUTPUT});
    }

    /**
     * servoWrite(pulseWidth): pulsewidth in ms
     * 0 (off), 500 (most anti-clockwise), 2500 (most clockwise)
     */
    steer(direction) {
        switch (direction) {
            case LEFT:
                console.log('steering left...');
                this.motor.servoWrite(500);
                this.stopTurningWhenLimitReached();
                break;
            case RIGHT:
                console.log('steering right...');
                this.motor.servoWrite(2000);
                this.stopTurningWhenLimitReached();
                break;
            case CENTER:
                console.log('returning to center...');
                this.motor.servoWrite(0);
                break;
            default:
                break;
        }
    }

    stopTurningWhenLimitReached() {
        setTimeout(() => {
            this.motor.servoWrite(0);
        }, MAX_STEERING_DURATION);
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