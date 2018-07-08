# Rover

<img src="https://raw.githubusercontent.com/ynnckth/rover/master/docs/rover.JPG" width="600">

### Setup and Installation
- TODO: add breadboard schema (e.g. fritzing)
- TODO: document power supply
- TODO: document project dependencies

Install the pigpio C library (https://www.npmjs.com/package/pigpio)
`sudo apt-get update`
`sudo apt-get install pigpio`

Install project:  
`npm install`

### Run
Start the application running on port 8081 (su permissions are needed to control the Pi's GPIO pins):
`sudo npm start`  

Open a browser and enter the Pi's IP-address:
`<ip-addr>:8081`

TODO: add startup script for camera video stream
