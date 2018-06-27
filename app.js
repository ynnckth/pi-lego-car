const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const THROTTLE = 'THROTTLE';
const STEER_LEFT = 'LEFT';
const STEER_RIGHT = 'RIGHT';
const STOP_STEERING = 'STOP_STEERING';
const STOP_THROTTLE = 'STOP_THROTTLE';

// TODO: define GPIO pins on raspberry pi

const ACTION_EVENT = 'action';


server.listen(3000);

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on(ACTION_EVENT, (action) => {
        switch (action.command) {
            case THROTTLE:
                console.log('accelerating...');
                // TODO: accelerate max
                break;
            case STEER_LEFT:
                console.log('steering left...');
                // TODO: steer left max
                break;
            case STEER_RIGHT:
                console.log('steering right...');
                // TODO: steer right max
                break;
            case STOP_STEERING:
                console.log('stopping steering');
                // TODO: return steering to middle position
                break;
            case STOP_THROTTLE:
                console.log('stopping throttle');
                // TODO: stop accelerating
                break;
            default:
                break;
        }
    });
});
