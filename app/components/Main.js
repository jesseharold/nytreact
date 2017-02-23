// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./Search");
var Saved = require("./Saved");

// Helper for making AJAX requests to our API
//var helpers = require("../utils/helpers");

// Creating the Main component
var Main = React.createClass({
  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { 
        savedList: [] 
    };
  },

  // The moment the page renders get the History
  componentDidMount: function() {

  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

  },
  // This function allows childrens to update the parent.
  setTerm: function(term) {
    // this.setState({ searchTerm: term });
  },
  // Here we render the function
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
