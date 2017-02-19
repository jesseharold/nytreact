var React = require("react");

var Form = React.createClass({
  render: function() {
    return (
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="text-center">Form Component</h2>
            </div>
            <div className="panel-body">
              <form>
                <label for="searchTopic">Topic</label>
                <input type="text" className="form-control" id="searchTopic"/>
                <label for="searchYearStart">Start Year</label>
                <input type="text" size="4" className="form-control" id="searchYearStart"/>
                <label for="searchYearEnd">End Year</label>
                <input type="text" size="4" className="form-control" id="searchYearEnd"/>
                <button className="btn btn-primary btn-lg center-block">Search</button>
              </form>
            </div>
          </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
