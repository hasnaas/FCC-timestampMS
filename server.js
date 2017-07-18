// server.js

var express = require('express');
var app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:id",function(req,res){
  var d=req.params.id;
  if(Number.isInteger(d)){
    res.send({"unix":d,"natural":new Date(d).toDateString()});
  }
  else
    if(!isNaN(Date.parse(d))){
     res.send({"unix":new Date(d).getTime(),"natural":d});    
    }
  else{
  res.send({"unix":"none","natural":"none"});  
  }
  
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
