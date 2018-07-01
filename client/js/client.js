(() => {

    // TODO: store as environment variable
    const ROVER_SERVER = 'http://localhost:8081';
    const socket = io.connect(ROVER_SERVER);

    const ARROW_UP = 38;
    const ARROW_LEFT = 37;
    const ARROW_RIGHT = 39;

    const ACTION_EVENT = 'action';

    let lastPressedKey;

    const sendCommand = (command) => {
        socket.emit(ACTION_EVENT, {command: command});
    };

    const handleKeyPress = () => {
        window.addEventListener("keydown", (e) => {
            let currentlyPressedKey = e.keyCode;
            if (lastPressedKey === currentlyPressedKey) {
                return;
            }
            switch (currentlyPressedKey) {
                case ARROW_UP:
                    console.log("throttling...");
                    sendCommand('THROTTLE');
                    break;
                case ARROW_LEFT:
                    console.log("steering left...");
                    sendCommand('LEFT');
                    break;
                case ARROW_RIGHT:
                    console.log("steering right...");
                    sendCommand('RIGHT');
                    break;
                default:
                    break;
            }
            lastPressedKey = currentlyPressedKey;
        });
    };

    // TODO: fix (currently not triggering)
    const handleKeyRelease = () => {
        window.addEventListener("keyup", (e) => {
            switch (e.keyCode) {
                case ARROW_LEFT:
                case ARROW_RIGHT:
                    console.log("stop steering");
                    sendCommand('STOP_STEERING');
                    break;
                case ARROW_UP:
                    console.log("stop throttling");
                    sendCommand('STOP_THROTTLE');
                    break;
                default:
                    break;
            }
            lastPressedKey = undefined;
        });
    };

    handleKeyPress();
    handleKeyRelease();

})();