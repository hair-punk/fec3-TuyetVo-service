const express = require('express');
const { Review } = require('../database/index');
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:3007/';
const faker = require('faker');

let app = express();

app.use(express.static(__dirname+'/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


/***********************************************/
//This route should send back the reviews for a game by the game ID
<<<<<<< HEAD
app.get('/game_id', function (req, res) {
  res.status(200).send(reviewComment());
=======
app.get('/:gameid', (req, res) => {
  var id = req.params.gameid;
  Review.find({game_id: id}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).json(data);
    }
  });
>>>>>>> master
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
<<<<<<< HEAD
app.post('/game_id', function (req, res) {
=======
app.post('/', (req, res) => {
>>>>>>> master
  res.status(201);
});

let port = 3007;

app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
});