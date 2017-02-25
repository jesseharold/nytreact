var React = require("react");

var Saved = React.createClass({
  render: function() {
    // generate the html for each saved article
    var savedList = "";
    if (this.props.savedList){
      var self = this;
      savedList = this.props.savedList.map(function(article) {
        var itemImage = "";
        if (article.image){
          itemImage = <img className="articleImage" src={article.image} />
        } 
        return <li className="list-group-item" key={article._id}>
            {itemImage}
            <div className="savedArticleInfo pull-right">
              <button className="btn btn-info btn-xs" onClick={function(){self.props.removeHandler(article._id);}}>Remove</button>
              <div className="savedComment">{article.comment}</div>
              <div className="dateSaved">Saved {article.createdAt.substring(0, article.createdAt.indexOf("T"))}</div>
            </div>
            <a className="articleLink" href={article.link} target="_blank">{article.title}</a>
            <br />{article.byLine}
            <br />{article.datePublished}
            <p>{article.snippet}</p>
            <div className="spacer" style={{clear: "both"}}></div>
          </li>;
      });
    }
    return (
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="text-center">Saved Articles</h2>
            </div>
            <div className="panel-body">
              <ul className="list-group">
                {savedList}
              </ul>
            </div>
          </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
