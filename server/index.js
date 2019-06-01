const express = require('express');
const { Review } = require('../database/index');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


/***********************************************/
//This route should send back the reviews for a game by the game ID
app.get('/:gameid', (req, res) => {
  var id = req.params.gameid;
  Review.find({game_id: id}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).json(data);
    }
  });
});


/***********************************************/
//This route should post new reviews
app.post('/', (req, res) => {
  res.status(201);
});

let port = 3007;

app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
});