(() => {

    // TODO: extract into environment variables
    const ROVER_SERVER = 'http://192.168.1.137:8081';
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

    let lastPressedKey;

    const sendCommand = (command) => {
        socket.emit('action', {command: command});
    };

    const highlightKeyboardArrow = (arrowClass) => {
        document.querySelector(`.${arrowClass}`).style['visibility'] = 'visible';
    };

    const hideHighlightKeyboardArrow = (arrowClass) => {
        document.querySelector(`.${arrowClass}`).style['visibility'] = 'hidden';
    };

    window.addEventListener('keydown', (e) => {
        let currentlyPressedKey = e.keyCode;

        // ignore multiple pressing of the same key (e.g. when key is hold down)
        if (lastPressedKey === currentlyPressedKey) {
            return;
        }

        switch (currentlyPressedKey) {
            case ARROW_UP:
                sendCommand(commands.FORWARD);
                highlightKeyboardArrow('arrow-up');
                break;
            case ARROW_DOWN:
                sendCommand(commands.BACKWARD);
                highlightKeyboardArrow('arrow-down');
                break;
            case ARROW_LEFT:
                sendCommand(commands.LEFT);
                highlightKeyboardArrow('arrow-left');
                break;
            case ARROW_RIGHT:
                sendCommand(commands.RIGHT);
                highlightKeyboardArrow('arrow-right');
                break;
            default:
                break;
        }
        lastPressedKey = currentlyPressedKey;
    });

    window.addEventListener('keyup', (e) => {
        switch (e.keyCode) {
            case ARROW_LEFT:
                sendCommand(commands.CENTER);
                hideHighlightKeyboardArrow('arrow-left');
                break;
            case ARROW_RIGHT:
                sendCommand(commands.CENTER);
                hideHighlightKeyboardArrow('arrow-right');
                break;
            case ARROW_UP:
                sendCommand(commands.STOP);
                hideHighlightKeyboardArrow('arrow-up');
                break;
            case ARROW_DOWN:
                sendCommand(commands.STOP);
                hideHighlightKeyboardArrow('arrow-down');
                break;
            default:
                break;
        }
        lastPressedKey = undefined;
    });

})();
