var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// require all models
var articleModel = require('./models/Article');
var commentModel = require('./models/Comment');

exports.setup = function(app) {
    // list out all saveds articles
    app.get("/api/saved", function(req, res) {
        var promise = articleModel
            .find({})
            .sort({updatedAt: -1})
            .exec();
        promise.then(function(data){
            //console.log(data);
            res.json(data);
        })
        .catch(function(err){
            console.log("error getting articles: ", err);
        });
    });

    // create a new saved article
    app.post("/api/saved", function(req, res){
        articleModel.create({
            title: req.body.title,
            link: req.body.link,
            datePublished: req.body.date,
            snippet: req.body.snippet,
            byLine: req.body.byLine,
            image: req.body.image
        }, function(err, createdArticle){
            if (err){ 
                if (err.code == 11000){
                    console.log('this article has already been saved:', err);
                } else {
                    console.log('error creating article:', err);
                }
            } else {
                // successfully created an article, return all articles to browser
                console.log("created new article");
                var promise = articleModel
                    .find({})        
                    .sort({updatedAt: -1})
                    .exec();
                promise.then(function(data){
                    res.json(data);
                })
                .catch(function(err){
                    console.log("error getting articles: ", err);
                });
            }
        });
    });

    // delete a previously saved article
    app.delete("/api/saved", function(req, res) {
        console.log("deleting", req.body);
        var promise = articleModel.findByIdAndRemove(req.body.articleId).exec();
        promise.then(function(data){
            console.log("deleted " + req.body.articleId);
            res.json(data);
        })
        .catch(function(err){
            console.log("error deleting document: ", err);
        });
    });
};