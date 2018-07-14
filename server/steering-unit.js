
const LEFT = 'left';
const RIGHT = 'right';
const CENTER = 'center';


class SteeringUnit {

    constructor(gpio) {
        // TODO: set correct pin
        this.motor = new gpio(10, {mode: gpio.OUTPUT});
    }

    /**
     * servoWrite(pulseWidth): pulsewidth in ms
     * 0 (off), 500 (most anti-clockwise), 2500 (most clockwise)
     */
    steer(direction) {
        switch (direction) {
            case LEFT:
                console.log('steering left...');

                const interval = setInterval(() => {
                    this.motor.servoWrite(1000);
                }, 200);

                clearInterval(interval);

                break;
            case RIGHT:
                console.log('steering right...');
                this.motor.servoWrite(2000);
                break;
            case CENTER:
                console.log('returning to center...');
                this.motor.servoWrite(0);
                break;
            default:
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