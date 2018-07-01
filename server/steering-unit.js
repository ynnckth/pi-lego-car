
// const Gpio = require('pigpio').Gpio;

/*
const motor = new Gpio(10, {mode: Gpio.OUTPUT});
let pulseWidth = 1000;
let increment = 100;
*/

const LEFT = 'left';
const RIGHT = 'right';
const CENTER = 'center';

class SteeringUnit {

    constructor() {
        /*
        setInterval(() => {
            motor.servoWrite(pulseWidth);

            pulseWidth += increment;
            if (pulseWidth >= 2000) {
                increment = -100;
            } else if (pulseWidth <= 1000) {
                increment = 100;
            }
        }, 1000);
        */
    }

    steer(direction) {
        switch (direction) {
            case LEFT:
                console.log('steering left...');
                break;
            case RIGHT:
                console.log('steering right...');
                break;
            case CENTER:
                console.log('returning to center...');
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