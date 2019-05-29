var express = require('express');
var app = express();


//Reusable controllers
var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
            {firstName:'Ravi',lastName:'Tambade',age:43},
            {firstName:'Prashant',lastName:'Karhale',age:43},
            {firstName:'Rohit',lastName:'Puranik',age:28},
            {firstName:'Shiv',lastName:'Kumar',age:25},
            {firstName:'Manoj',lastName:'Pande',age:23}
      ];
  res.send(customers);
};

// setting router to map requests  with controllers

app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})