
const Gpio = require('pigpio').Gpio;

SteeringUnit.LEFT = 'left';
SteeringUnit.RIGHT = 'right';

const motor = new Gpio(10, {mode: Gpio.OUTPUT});
let pulseWidth = 1000;
let increment = 100;

class SteeringUnit {

    constructor() {

        setInterval(() => {
            motor.servoWrite(pulseWidth);

            pulseWidth += increment;
            if (pulseWidth >= 2000) {
                increment = -100;
            } else if (pulseWidth <= 1000) {
                increment = 100;
            }
        }, 1000);
    }

    steer(direction) {
        switch (direction) {
            case SteeringUnit.LEFT:
                console.log('steering left...');
                break;
            case SteeringUnit.RIGHT:
                console.log('steering right...');
                break;
            default:
                break;
        }
    }

    returnToCenter() {
        console.log('stop steering');
    }
}

module.exports = SteeringUnit;