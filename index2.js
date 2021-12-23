// npm install + require
const express = require('express');
const bodyParser = require('body-parser')
//const { MongoClient } = require('mongodb');
require('dotenv').config();
const cors = require("cors");

// Create MongoClient to acces database cluster
//const client = new MongoClient(process.env.URI);

// Port variable for Heroku
const port = process.env.PORT;

// Create variables
const app = express();
//const db = client.db(process.env.DB);
//const collection = db.collection(process.env.COL)

// executing code using middlewares
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.redirect("/info.html");
});

app.get('/api/user_data', (req, res) => {
    
});

app.put('/api/user_data/:id', (req, res) => {
    
});

app.post('/api/newUser', (req, res) => {
    
});

app.delete('/api/user_data/:id', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`My first REST API Example app listening at http://localhost:${port}`)
  })