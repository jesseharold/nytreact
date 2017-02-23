// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./Search");
var Saved = require("./Saved");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Creating the Main component
var Main = React.createClass({
  getInitialState: function() {
    console.log("getInitialState");
    return { 
        savedList: [] 
    };
  },
  // The moment the page renders
  componentDidMount: function() {
    console.log("componentDidMount");
  },

  // If the component changes
  componentDidUpdate: function() {
    console.log("componentDidUpdate");
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 className="text-center">New York Times<br />Article Search</h1>
            <p className="text-center">
              <em>Search for and annotate articles of interest</em>
            </p>
          </div>
          <div className="col-md-12">
            <Search />
            <Saved savedList={this.state.savedList} />
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
