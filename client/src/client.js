(() => {

    // TODO: extract into environment variables
    const ROVER_SERVER = 'http://192.168.1.200:8081';
    const socket = io.connect(ROVER_SERVER);

    const ARROW_UP = 38;
    const ARROW_LEFT = 37;
    const ARROW_RIGHT = 39;

    const ACTION_EVENT = 'action';

    let lastPressedKey;

    const sendCommand = (command) => {
        socket.emit(ACTION_EVENT, {command: command});
    };

    window.addEventListener('keydown', (e) => {
        let currentlyPressedKey = e.keyCode;
        // ignore multiple pressing of the same key
        if (lastPressedKey === currentlyPressedKey) {
            return;
        }

        switch (currentlyPressedKey) {
            case ARROW_UP:
                console.log('throttling...');
                sendCommand('ACCELERATE');
                break;
            case ARROW_LEFT:
                console.log('steering left...');
                sendCommand('LEFT');
                break;
            case ARROW_RIGHT:
                console.log('steering right...');
                sendCommand('RIGHT');
                break;
            default:
                break;
        }
        lastPressedKey = currentlyPressedKey;
    });

    window.addEventListener('keyup', (e) => {
        switch (e.keyCode) {
            case ARROW_LEFT:
            case ARROW_RIGHT:
                console.log('steer center');
                sendCommand('STEER_CENTER');
                break;
            case ARROW_UP:
                console.log('stop accelerating');
                sendCommand('STOP');
                break;
            default:
                break;
        }
        lastPressedKey = undefined;
    });

})();