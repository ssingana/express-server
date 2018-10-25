const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req,res){
    res.send('Hello from express server');
});

app.listen(PORT, function(){
    console.log("Express server running on localhost :" + PORT);
});

app.post('/user', function(req,res){
    console.log('Posting the user data started.');
    console.log(req.body);
    res.status(200).send({"message": "Data successfully received."});
    console.log('Posting the user data ends.');
});