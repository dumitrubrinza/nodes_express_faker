var express = require('express');
var app = express();
var faker = require('faker');

app.get('/', function (req, res) {
  res.send(name);
});

var name = faker.name.findName();
var randomEmail = faker.internet.email();

console.log("faker.name = " + name);
console.log(" faker.internet.email = " + randomEmail);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



  