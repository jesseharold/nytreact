var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true, 
    unique: true
  },
  datePublished: {
      type: Date
  },
  snippet: {
      type: String
  },
  byLine: {
      type: String
  },
  image: {
    type: String
  },
  comment: {
    type: String
  }
  // Associations - save for later development of multiple comments
  // comments: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Comment"
  // }]
}, {
  timestamps: true
});

//always include comments when articles are called up
// var autoPopulateComments = function(next) {
//   this.populate('comments');
//   next();
// };

//attach pre populator to all find events used
// ArticleSchema.
//   pre('findById', autoPopulateComments).
//   pre('findByIdAndUpdate', autoPopulateComments).
//   pre('findOne', autoPopulateComments).
//   pre('find', autoPopulateComments);

var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;
