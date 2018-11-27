# Networking Datalogger

## Explanation for commands
Whenever running the server, instead of using `node index.js` use `nodemon index.js`. This will let the server keep running even when changes are being made.<br>
When running the application, include the ip-address for the datalogger as an argument. i.e. `0.0.0.0`

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
2. create a folder `md c:\data\db`, here is where the database is saved by default
3. run mongod, it will instantiate the mongodb server
4. install [MongoDB Compass](https://www.mongodb.com/download-center/compass)
5. In the connect to Host, specify what host and port to connect to