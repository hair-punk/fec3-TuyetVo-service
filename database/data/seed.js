const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/usersgamereview', { useNewUrlParser: true });
const dbURL = 'mongodb://localhost:27017/usersgamereview';
const async = require('async');
const faker = require('faker');

const reviewSchema = new mongoose.Schema({
  game_id: Number,
  recommended: Boolean,
  hours_played: Number,
  datePosted: Date,
  comment: String,
  user: [{
          profile_id: Number,
          username: String,
          user_icon: Number,
          products_owned: Number,
          number_of_reviews: Number
          }]
});

const Review = mongoose.model('Review', reviewSchema);

//Create individual reviews
const createReview = () => {
  let comment = {};
  comment.gameid = faker.random.number({min: 1, max: 100});
  comment.recommend = faker.random.boolean();
  comment.date = faker.date.recent();
  comment.randomReview = faker.lorem.paragraph();
  return comment;
};

//Creates template for user
const userTemplate = (num) => {
  let user = {};
  user.userID = faker.random.number({min: 1, max: num});
  user.userIcon = user.id;
  user.username = faker.internet.userName();
  user.hoursPlayed = faker.random.number({min: 1, max: 2000});
  user.productsOwned = faker.random.number({min: 1, max: 1000});
  user.numOfReviews = faker.random.number({min:1, max: 100});
  return user;
};


//Create new user entry- seed DB
const seed = () => {
  for (var i = 0; i < 100; i++) {
    var reviewEntry = createReview();
    var userEntry = userTemplate(20);
    var newReview = new Review ({
      game_id: reviewEntry.gameid,
      recommended: reviewEntry.recommend,
      datePosted: reviewEntry.date,
      comment: reviewEntry.randomReview,
      user: [{
            profile_id: userEntry.userID,
            username: userEntry.username,
            user_icon: userEntry.userIcon,
            products_owned: userEntry.productsOwned,
            number_of_reviews: userEntry.numOfReviews
          }]
    });

    newReview.save((err) => {
      if (err) {
        console.log(err);
      }
      if (i === 99) {
        mongoose.disconnect();
      }
    })
  }
};


seed();
//db.collection.drop() -to drop db after seeding


// //Async: Open/close database for seeding
// async.series([

//   //Connect to Mongo, drop database
//   (callback) => {
//     mongoose.connect(dbURL, (err, db) => {
//       if (err) {
//         console.error(err);
//       } else {
//         db.dropDatabase((err, results) => {
//           db.close(true, (err, results) => {
//             callback(null, 'Database dropped successfully');
//           });
//         });
//       }
//     });
//   },

//   //Connect to MongoDB with mongoose
//   (callback) => {
//     mongoose.connect(dbURL);
//     mongoose.connection.on('Connected!', () => {
//       console.log('Database connected via Mongoose')
//       callback(null, 'Connected to mongodb!');
//     });
//   },

//   //Seed database
//   (callback) => {
//     var users = [];
//     for (var i = 0; i < 20; i++) {
//       var userEntry = createUser(i);
//       var newUser = new User ({
//         profile_id: userEntry.id,
//         userIcon: userEntry.icon,
//         username: userEntry.name,
//         products_owned: userEntry.productsOwned,
//         reviews: userEntry.reviewArr,
//         number_of_reviews: userEntry.reviewArr.length
//       });

//       users.push(newUser);
//     }

//       async.eachSeries((users, userSavedCallback) => {
//         users.save((err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log('User saved');
//             userSavedCallback();
//           }
//         });
//       });
//     },

//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       callback(null, "Database successfully seeded")
//     }
//   }
// ],

// (err, results) => {
//   console.log('Seeding Completed')
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(results);
//   }
//   process.exit(0);
// });