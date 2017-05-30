var express = require('express');
var app = express();

app.use('/follywood', express.static('follywood'));

app.get('/', function(req,res){
  res.send('follywood app configs');
});

module.exports = app;

var server = app.listen(5000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('FollyWood app listening @ http://%s:%s',host,port);
});
