const express = require('express');
const db = require('../database/index');
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:3007/';
const faker = require('faker');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


/***********************************************/
//This route should send back the reviews for a game by the game ID
app.get('/', function (req, res) {
  res.status(200).send(reviewComment());
});

const reviewComment = function() {
  const commentArr = [];

  for (var i = 0; i < Math.floor(Math.random() * 11); i++) {
    commentArr.push(faker.fake('{{lorem.paragraph}}'));
  }
  console.log(commentArr.length);
  return commentArr;
};

/***********************************************/
//This route should take the game ID and get the reviews
app.post('/', function (req, res) {
  res.status(201);
});

let port = 3007;

app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
});