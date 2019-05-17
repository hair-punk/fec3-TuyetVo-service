const express = require('express');
const db = require('../database/index');
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:3007/';
const faker = require('faker');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.send(faker.fake('{{internet.userName}}, {{date.recent}}, {{lorem.paragraph}}'))
});


let port = 3007;

app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
});