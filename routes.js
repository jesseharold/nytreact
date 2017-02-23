var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// require all models
var articleModel = require('./models/Article');
var commentModel = require('./models/Comment');

exports.setup = function(app) {
    // list out all saveds articles
    app.get("/api", function(req, res) {
        var promise = articleModel.find({}).exec();
        promise.then(function(data){
            //console.log(data);
            res.json(data);
        })
        .catch(function(err){
            console.log("error: ", err);
        });
    });

    app.post("/api", function(req, res){
        articleModel.create({
            title: req.body.title,
            link: req.body.link,
            datePublished: req.body.date,
            snippet: req.body.snippet,
            byLine: req.body.byLine,
            image: req.body.image
        }, function(err, createdSite){
            if (err){ 
                if (err.code == 11000){
                    console.log('this article has already been saved:', err);
                } else {
                    console.log('error creating article:', err);
                }
            } else {
                // success
                res.json(createdSite);
            }
        });
    });
};