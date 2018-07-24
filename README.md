# Rover

<img src="https://raw.githubusercontent.com/ynnckth/rover/master/docs/rover.JPG" width="600">

### Setup and Installation
- TODO: add breadboard schema (e.g. fritzing)
- TODO: document power supply

**Prerequisites**

- **GPIO**
Install the pigpio C library (https://www.npmjs.com/package/pigpio):  
`sudo apt-get update`  
`sudo apt-get install pigpio`  

- **Video Stream**  
Setup and install `mjpg-streamer` for video streaming from the Pi (https://desertbot.io/blog/how-to-stream-the-picamera)  
The current run config expects the mjpg-streamer repository to be cloned inside of the project folder.  

Install the project:  
`npm install`

### Run
Start the application running on port 8081 (su permissions are needed to control the Pi's GPIO pins)
mjpeg-streamer is started in parallel running on port 8080 providing the video stream:  
`sudo npm start`  

Open a browser and enter the Pi's IP-address:  
`<ip-addr>:8081`
