# Networking Datalogger

## Explanation for commands
Whenever running the server, instead of using `node index.js` use `nodemon index.js`. This will let the server keep running even when changes are being made.<br>
When running the application, include the ip-address for the datalogger as an argument. i.e. `0.0.0.0`

## start server
1. npx nodemon index.js <IP address>

### npm commands
* npm i init --yes
* npm i nodemon -g (optional)
* npm i express
* npm i mongodb

#### midleware
* npm i helmet --save
* npm i morgan --save

### MongoDB installation
1. install [MongoDB](https://www.mongodb.com/download-center?jmp=nav)
    1. Add it to the environment variables [PATH](https://stackoverflow.com/a/41507803)
2. create a folder `md c:\data\db`, here is where the database is saved by default
3. run mongod, it will instantiate the mongodb server, default port 27017
4. install [MongoDB Compass](https://www.mongodb.com/download-center/compass)
5. In the connect to Host, specify what host and port to connect to

### DataLogger Configuration
* scw_files folder contains the program configuration for the Datalogger data recording
* Phototransistor configuration - Uses differential Voltage to calculate the voltage. The lower the voltage means that there is light present, the higher the voltage means there is lack of light. So far the lowest value for when there's light present it's 0.34mV<br> ![alt text](https://github.com/jfleurent/Networking_Datalogger/blob/dev/images/Phototransistor_Differential_Voltage.PNG)
* Temperature sensor configuration - Uses Single-End Voltage to get the temperature. <br> It uses the formula `Temp Celcius = 100 * (voltage reading) - 50`<br> ![alt text](https://github.com/jfleurent/Networking_Datalogger/blob/dev/images/Temerature_SingleEnd_Voltage.PNG)
* Configuration for the Static IP address:<br>![alt text](https://github.com/jfleurent/Networking_Datalogger/blob/dev/images/DeviceConfig_StaticIpConfig.png)
