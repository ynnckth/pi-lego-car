const express = require('express');
const ControlUnit = require('./control-unit');

const SERVER_PORT = 8081;

const app = express();
app.use(express.static('client'));

const server = app.listen(SERVER_PORT, () => {
    console.log("Server running on port %s", SERVER_PORT);
});

const io = require('socket.io')(server);

const controlUnit = new ControlUnit(io);
controlUnit.start();