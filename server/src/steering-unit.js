
const GPIO_PIN = 10;

const LEFT = 'left';
const RIGHT = 'right';
const CENTER = 'center';

// the duration to steer from the center to each side
// until the limit steering angle is reached
const STEERING_RANGE_DURATION = 500;  // in millis

const DIRECTION_TO_PWM_MAP = {
    'left': 500,
    'right': 2000
};
const SERVO_PWM_STOP = 0;


class SteeringUnit {

    constructor(gpio) {
        this.motor = new gpio(GPIO_PIN, {mode: gpio.OUTPUT});
        this.currentDirection = CENTER;
        this.operationInProgress = false;
    }

    /**
     * TODO: fix bug when LEFT or RIGHT is pressed quickly and then released.
     * In this case the release event gets dropped since the turning operation was still in progress.
     * Idea: Handle the steering events in a queue and treat the press/release events together (reactive stream).
     */
    steer(direction) {
        if (direction === this.currentDirection || this.operationInProgress === true) {
            return;
        }
        switch (direction) {
            case LEFT:
                this.turn(LEFT);
                break;
            case RIGHT:
                this.turn(RIGHT);
                break;
            case CENTER:
                if (this.currentDirection === LEFT) {
                    this.turn(RIGHT);
                } else if (this.currentDirection === RIGHT) {
                    this.turn(LEFT);
                }
                break;
            default:
                break;
        }
        this.currentDirection = direction;
    }

    /**
     * servoWrite(pulseWidth): pulsewidth in ms
     * 0 (off), 500 (most anti-clockwise), 2500 (most clockwise)
     */
    turn(direction) {
        this.operationInProgress = true;
        this.motor.servoWrite(DIRECTION_TO_PWM_MAP[direction]);
        this.stopAfterMillis(STEERING_RANGE_DURATION);
    }

    stopAfterMillis(millis) {
        setTimeout(() => {
            this.motor.servoWrite(SERVO_PWM_STOP);
            this.operationInProgress = false;
        }, millis);
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