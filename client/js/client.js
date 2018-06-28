(() => {

    // TODO: the raspberry's IP address is needed instead of localhost since the server runs on the pi
    const ROVER_SERVER = 'http://localhost:3000';
    const socket = io.connect(ROVER_SERVER);

    const ARROW_UP = 38;
    const ARROW_LEFT = 37;
    const ARROW_RIGHT = 39;

    const ACTION_EVENT = 'action';

    let lastPressedKey;

    const handleKeyPress = () => {
        window.addEventListener("keydown", (e) => {
            let currentlyPressedKey = e.keyCode;
            if (lastPressedKey === currentlyPressedKey) {
                return;
            }
            switch (currentlyPressedKey) {
                case ARROW_UP:
                    console.log("throttling...");
                    socket.emit(ACTION_EVENT, {command: 'THROTTLE'});
                    break;
                case ARROW_LEFT:
                    console.log("steering left...");
                    socket.emit(ACTION_EVENT, {command: 'LEFT'});
                    break;
                case ARROW_RIGHT:
                    console.log("steering right...");
                    socket.emit(ACTION_EVENT, {command: 'RIGHT'});
                    break;
                default:
                    break;
            }
            lastPressedKey = currentlyPressedKey;
        });
    };

    const handleKeyRelease = () => {
        window.addEventListener("keyup", (e) => {
            switch (e.keyCode) {
                case ARROW_LEFT:
                case ARROW_RIGHT:
                    console.log("stop steering");
                    socket.emit(ACTION_EVENT, {command: 'STOP_STEERING'});
                    break;
                case ARROW_UP:
                    console.log("stop throttling");
                    socket.emit(ACTION_EVENT, {command: 'STOP_THROTTLE'});
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