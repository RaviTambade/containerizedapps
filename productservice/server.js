var express = require('express');
var app = express();

//Reusable controllers
var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var products = [
    {id:1, title:"Rose",description:"Valentine flower",quantity:500, unitprice:12},
    {id:2, title:"Gerbera",description:"Wedding flower",quantity:1500, unitprice:16},
    {id:3, title:"Lotus",description:"Worship flower",quantity:5000, unitprice:17},
    {id:4, title:"Lily",description:"Smelling flower",quantity:400, unitprice:25},
    {id:5, title:"Marigold",description:"Festival flower",quantity:7500, unitprice:34},
  ];
  res.send(products);
};

// setting router to map requests  with controllers
app.get ('/products',productController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})