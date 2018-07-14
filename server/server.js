'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var env = require('./config/env');
var cors = require('cors');

var app = express();

var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect(env.DATABASE, function(err, db){
  if(err){
    throw err;
  }
  else{
    console.log("connected to mongo db");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//import /auth routes
const auth = require('./routes/auth');
app.use('/auth', auth.router);

//import /chat routes
const chat = require('./routes/chat');
app.use('/chat', chat.router);

//set server to listen on port on any interface (0.0.0.0)
app.listen(port, "0.0.0.0", function() {
  console.log(`api running on port ${port}`);
});
