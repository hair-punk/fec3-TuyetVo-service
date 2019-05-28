const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/usersgamereview', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
  console.log('Connected!');
  });


const userSchema = new mongoose.Schema({
  profile_id: Number,
  username: String,
  userIcon: Number,
  products_owned: Number,
  number_of_reviews: Number,
  reviews: [{
              game_id: Number,
              recommended: Boolean,
              hours_played: Number,
              datePosted: Date,
              comment: String
            }]
});

const User = mongoose.model('User', userSchema);

// let query = (gameID) => {
//   return User.find({game_id: gameID}).exec().then((review) => {
//     return review;
//   })
// }

// module.exports.query = query;
module.exports.User = User;