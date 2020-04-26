import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import routes from './routes';

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

  // create express app
  const app = express();
  app.use(bodyParser.json());

  //  Connect all our routes to our application
  app.use('/', routes);

  // run app
  app.listen(3000);

  console.log("Express application is up and running on port 3000");

}).catch(error => console.log("TypeORM connection error: ", error));