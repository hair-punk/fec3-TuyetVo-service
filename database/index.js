const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reviews', {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
  console.log('Connected!');
  });

let reviewSchema = new mongoose.Schema({
  profile_id: Number,
  username: String,
  comments: String,
  recommended: Boolean
});

let Review = mongoose.model('Review', reviewSchema);

let save = (data) => {

};


module.exports.save = save;

// profile_id: Number,
// username: String,
// postedDate: Date,
// comments: String,
// recommended: Boolean,
// language: String