(() => {

    // TODO: extract into environment variables
    const ROVER_SERVER = 'http://192.168.1.200:8081';
    const socket = io.connect(ROVER_SERVER);

    const ARROW_UP = 38;
    const ARROW_LEFT = 37;
    const ARROW_RIGHT = 39;
    const ARROW_DOWN = 40;

    const commands = {
        FORWARD: 'forward',
        BACKWARD: 'backward',
        STOP: 'stop',
        LEFT: 'left',
        RIGHT: 'right',
        CENTER: 'center'
    };

    const sendCommand = (command) => {
        socket.emit('action', {command: command});
    };

    window.addEventListener('keydown', (e) => {
        let currentlyPressedKey = e.keyCode;
        switch (currentlyPressedKey) {
            case ARROW_UP:
                sendCommand(commands.FORWARD);
                break;
            case ARROW_DOWN:
                sendCommand(commands.BACKWARD);
                break;
            case ARROW_LEFT:
                sendCommand(commands.LEFT);
                break;
            case ARROW_RIGHT:
                sendCommand(commands.RIGHT);
                break;
            default:
                break;
        }
    });

    window.addEventListener('keyup', (e) => {
        switch (e.keyCode) {
            case ARROW_LEFT:
            case ARROW_RIGHT:
                sendCommand(commands.CENTER);
                break;
            case ARROW_UP:
            case ARROW_DOWN:
                sendCommand(commands.STOP);
                break;
            default:
                break;
        }
    });

})();