var React = require("react");

var Savebutton = require("./Savebutton");

var Results = React.createClass({
  getCommentBeforeSave: function(article, comment){
    this.props.saveHandler(article, comment);
  },
  render: function() {
    // generate the list items for each retrieved article
    var self = this;
    var resultList;
    if (this.props.resultList && this.props.resultList.length > 0){
      resultList = this.props.resultList.map(function(article) {
          var itemImage = "";
          if (article.image){
            itemImage = <img className="articleImage" src={article.image} />
          } 
          return <li className="list-group-item" key={article.id}>
              {itemImage}            
              <Savebutton id={article.id} clickHandler={function(comment){self.getCommentBeforeSave(article, comment)}} />
              <a className="articleLink" href={article.link} target="_blank">{article.headline}</a>
              <br />{article.byline}
              <br />{article.datePublished}
              <p>{article.snippet}</p>
              <div className="spacer" style={{clear: "both"}}></div>
            </li>;
      });
    } else {
      resultList = <li className="list-group-item">Sorry, no results for that query.</li>
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="text-center">Search Results</h2>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {resultList}
          </ul>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
