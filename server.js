const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const SERVER_PORT = 3000;
const expressObject = express();
expressObject.use(bodyParser.json());
expressObject.use(cors());

expressObject.get('/', function(req,res){
    res.send('Hello from express server');
});

expressObject.listen(SERVER_PORT, function(){
    console.log("Express server running on localhost :" + SERVER_PORT);
});

expressObject.post('/user', function(req,res){
    console.log('Posting the user data started.');
    console.log(req.body);
    res.status(200).send({"message": "Data successfully received."});
    console.log('Posting the user data ends.');
});

expressObject.post('/error', function(req,res){
    res.status(401).send({"message": "Posting failed."});
});