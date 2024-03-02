import 'dotenv/config';
import mongoose from 'mongoose';
import configs from './app/_helpers/config';
import express from 'express';
const app = express();
import errorHandler from './app/_helpers/errhandler';
import routes from './app/routes';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

// const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

/*----hosting_localhost_folder_on_localhost----*/
app.use("/assets",express.static('public'));

// Load all routes
routes(app);

const defaultDb: string = configs.mongoCollectionName;

/*----------Create mongoDb connection---------*/
const connectionString = `mongodb://${configs.mongoDbHost}:${ configs.mongoDbPort}/${defaultDb}`

// Connect to the MongoDB database
mongoose.connect(connectionString).then(()=>{
  // Get the default connection
  const db = mongoose.connection;

  //see logs in console/terminal 
  mongoose.set('debug', true)

  // Event handler for connection errors
  db.on('error', console.error.bind(console,"MongoDb Connection error: "));

  // Event handler for successful connection
  db.once('open', () => {
    console.log("Successfully connected to mongoDb: "+ defaultDb,)
  });

  // Event handler for connection close
  db.on('close', () => {
    console.log("Connection to MongoDB closed.");
  });
}).catch((err)=>{
  console.error("Failed to connect to MongoDB:", err);
})
/*--------------------------------------------*/

/*-----Creating Express server----*/
const host: string = configs.serverHost;
let port: string |number = configs.serverPort;

/* Normalize a port into a number or false. */
function normalizePort(val:string) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return port;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

const server_port: number |boolean = normalizePort(port);

if(!server_port){
  throw new Error("Invalid 'Server Port' number");
}

app.listen(server_port, host, () => {
  console.log(`Server is running at http://${host}:${server_port}`);
});
/*-----------------------------*/

app.use(errorHandler);
