
const LEFT = 'left';
const RIGHT = 'right';
const CENTER = 'center';

// TODO: adapt this value to the steering hardware
const MAX_STEERING_DURATION = 500;  // in millis
const SERVO_PWM_LEFT = 500;
const SERVO_PWM_RIGHT = 2000;
const SERVO_PWM_STOP = 0;

// TODO: set correct GPIO pin of the car
const GPIO_PIN = 10;


class SteeringUnit {

    constructor(gpio) {
        this.motor = new gpio(GPIO_PIN, {mode: gpio.OUTPUT});
        this.currentDirection = CENTER;
    }

    /**
     * servoWrite(pulseWidth): pulsewidth in ms
     * 0 (off), 500 (most anti-clockwise), 2500 (most clockwise)
     */
    // TODO: fix returning to center after steering in one direction
    steer(direction) {
        if (direction === this.currentDirection) {
            return;
        }

        console.log("steering direction: " + direction);
        switch (direction) {
            case LEFT:
                this.motor.servoWrite(SERVO_PWM_LEFT);
                this.stopTurningWhenLimitReached();
                this.currentDirection = direction;
                break;
            case RIGHT:
                this.motor.servoWrite(SERVO_PWM_RIGHT);
                this.stopTurningWhenLimitReached();
                this.currentDirection = direction;
                break;
            case CENTER:
                if (this.currentDirection === LEFT) {
                    this.motor.servoWrite(RIGHT);
                } else {
                    this.motor.servoWrite(LEFT);
                }
                this.stopTurningWhenLimitReached();
                break;
            default:
                break;
        }
    }

    stopTurningWhenLimitReached() {
        setTimeout(() => {
            this.motor.servoWrite(SERVO_PWM_STOP);
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