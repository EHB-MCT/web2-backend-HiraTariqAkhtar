// npm install + require
const express = require('express');
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb');
require('dotenv').config();
const cors = require("cors");

// Create MongoClient to acces database cluster
const client = new MongoClient(process.env.uri);

// Port variable for Heroku
const port = process.env.port;

// Create variables
const app = express();
const db = client.db(process.env.db);
const collection = db.collection("user_data")

// executing code using middlewares
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());

