var React = require("react");

var Results = React.createClass({
  render: function() {
    // generate the list items for each retrieved article
    console.log("this.props.resultList: ", this.props.resultList);
    var resultList = this.props.resultList.map(function(article) {
        return <li className="list-group-item" key={article.id}><a href={article.link}>{article.headline}</a><br />{article.byline}<br />{article.date}<p>{article.snippet || "no snippet"}</p><button className="btn btn-info btn-xs pull-right">Save</button></li>;
    });
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
