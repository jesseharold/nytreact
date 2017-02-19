var React = require("react");

var Saved = React.createClass({
  render: function() {
    // generate the list items for each saved article
    var savedList = this.props.savedList.map(function(article) {
        return <li className="list-group-item" key={article.call}>{article.title}<button className="btn btn-warning btn-xs pull-right">Remove</button></li>;
    });
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
