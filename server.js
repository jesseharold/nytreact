var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// *** Database configuration ***
var mongoDBConnection = "mongodb://";
// for local testing:
mongoDBConnection += "localhost/nytimesReact";
// for production:
//mongoDBConnection += "heroku_svhdvhb7:4gfv7i2vpf44td5024frsjv6kf@ds161109.mlab.com:61109/heroku_svhdvhb7";
mongoose.connect(mongoDBConnection);
var db = mongoose.connection;
// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// require all models, and seed data
var articleModel = require('./models/Article');
var commentModel = require('./models/Comment');

// show connection success message, and seed create data if necessary
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// *** Express App configuration ***
var PORT = process.env.PORT || 9090;
var app = express();

//middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
var routes = require("./routes");
routes.setup(app);

app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});
