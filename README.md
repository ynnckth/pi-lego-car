# Rover

<img src="https://raw.githubusercontent.com/ynnckth/rover/master/docs/rover.JPG" width="600">

### Setup and Installation
Tested on a Raspberry Pi 2 Model B V1.1  
OS: Linux raspberrypi 4.14.52-v7+

- TODO: add breadboard schema (e.g. fritzing)
- TODO: document power supply

**Prerequisites**

- **GPIO**  
Install the pigpio C library (possibly already installed):  
`sudo apt-get update`  
`sudo apt-get install pigpio`    

- **Video Stream**  
Download and install *mjpg-streamer* for video streaming from the Pi (https://desertbot.io/blog/how-to-stream-the-picamera)  
The current run config expects the mjpg-streamer repository to be cloned inside of the project folder.  

1. Clone the mjpg-streamer project:   
`git clone https://github.com/jacksonliam/mjpg-streamer.git`
2. Navigate to the correct directory:   
`cd mjpg-streamer/mjpg-streamer-experimental/`
3. Install dependencies:  
`sudo apt-get install cmake`  
`sudo apt-get install python-imaging`  
`sudo apt-get install libjpeg-dev`  
4. Compile:  
`make CMAKE_BUILD_TYPE=Debug`
`sudo make install`


Install the project:  
`npm install`

### Run
Start the application running on port 8081 (su permissions are needed to control the Pi's GPIO pins)
mjpeg-streamer is started in parallel running on port 8080 providing the video stream:  
`sudo npm start`  

Open a browser and enter the Pi's IP-address:  
`<ip-addr>:8081`
