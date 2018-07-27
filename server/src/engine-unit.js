
const FORWARD = 'forward';
const BACKWARD = 'backward';
const STOP = 'stop';

// direction regulation
const DIRECTION_PIN_1 = 17; // GPIO17, Pin #11
const DIRECTION_PIN_2 = 18; // GPIO18, Pin #12

// speed regulation
const DC_MOTOR_PWM_PIN = 4; // GPIO04, Pin #7
const PWM_DUTY_CYCLE_SPEED = 50;


/**
 * The engine unit handles the forward/backwards movement of the rover.
 */
class EngineUnit {

    constructor(gpio) {
        this.directionSignal1 = new gpio(DIRECTION_PIN_1, {mode: gpio.OUTPUT});
        this.directionSignal2 = new gpio(DIRECTION_PIN_2, {mode: gpio.OUTPUT});
        this.speedSignal = new gpio(DC_MOTOR_PWM_PIN, {mode: gpio.OUTPUT});
    }

    move(direction) {
        switch (direction) {
            case FORWARD:
                this.directionSignal1.digitalWrite(1);
                this.directionSignal2.digitalWrite(0);
                this.speedSignal.pwmWrite(PWM_DUTY_CYCLE_SPEED);
                break;
            case BACKWARD:
                this.directionSignal1.digitalWrite(0);
                this.directionSignal2.digitalWrite(1);
                this.speedSignal.pwmWrite(PWM_DUTY_CYCLE_SPEED);
                break;
        }
    }

    stop() {
        this.speedSignal.pwmWrite(0);
    }

    static get FORWARD() { return FORWARD; }
    static get BACKWARD() { return BACKWARD; }
    static get STOP() { return STOP; }
}

module.exports = EngineUnit;