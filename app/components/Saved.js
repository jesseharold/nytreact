var React = require("react");

var Saved = React.createClass({
  render: function() {
    return (
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="text-center">Saved Articles</h2>
            </div>
            <div className="panel-body">
              <ul className="list-group">
                <li className="list-group-item">saved article name  <button className="btn btn-warning btn-xs pull-right">Remove</button></li>
                <li className="list-group-item">saved article name  <button className="btn btn-warning btn-xs pull-right">Remove</button></li>
                <li className="list-group-item">saved article name  <button className="btn btn-warning btn-xs pull-right">Remove</button></li>
                <li className="list-group-item">saved article name  <button className="btn btn-warning btn-xs pull-right">Remove</button></li>
                <li className="list-group-item">saved article name  <button className="btn btn-warning btn-xs pull-right">Remove</button></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
