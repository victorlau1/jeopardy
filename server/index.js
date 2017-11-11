var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var db = require('../database')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

app.get('/data', function(req, res) { 
  db.selectQuestion(req.query, res);
})

app.post('/data', function(req, res){
  if (Array.isArray(req.body)){
    db.batchInsertData(req.body, res)
  } else {
    db.insertData(req.body , res)
  }
})