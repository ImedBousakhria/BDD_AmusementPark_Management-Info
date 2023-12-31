require('dotenv').config();

import express, { urlencoded, static, json } from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createConnection } from 'mysql';
import middleware from './middleware'; // assuming you have a middleware file
import managerteam from './server/routes/managerteam';
import managerschedule from './server/routes/managerschedule';
import user from './server/routes/manageruser';



//const bodyParser = require('body-parser'); // No longer Required
//const mysql = require('mysql'); // Not required -> moved to userController


const app = express();
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded

app.use(urlencoded({ extended: true }));
app.use(static('public'));
 // New

// Parse application/json
// app.use(bodyParser.json());
app.use(json()); // New



 //You don't need the connection here as we have it in userController
 let connection = createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: process.env.DB_NAME
 });

// routes
app.use(managerschedule);
app.use(managerteam);
app.use(manageruser);
app.get('/', (req, res) => {
  res.send("this is home page");
});


app.listen(port, () => console.log(`Listening on port ${port}`));










app.use(methodOverride('_method'));