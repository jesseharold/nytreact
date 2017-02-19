var React = require("react");

var Results = React.createClass({
  render: function() {
    return (
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="text-center">Results Component</h2>
            </div>
            <div className="panel-body">
              <ul className="list-group">
                <li className="list-group-item">result <button className="btn btn-info btn-xs pull-right">Save</button></li>
                <li className="list-group-item">result <button className="btn btn-info btn-xs pull-right">Save</button></li>
                <li className="list-group-item">result <button className="btn btn-info btn-xs pull-right">Save</button></li>
                <li className="list-group-item">result <button className="btn btn-info btn-xs pull-right">Save</button></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
