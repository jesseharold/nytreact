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
    return { 
        savedList: [] 
    };
  },
  componentWillMount: function(){
    // get all saved articles and copy them to Main's state
    var self = this;
    helpers.getSaved().then(function(result){
      self.setState({savedList: result.data});
    });
  },
  updateSaved: function(saveThisArticle) {
    // call the api to create a new saved article,
    // then update state with new saved list
    var self = this;
    helpers.postSaved(saveThisArticle).then(function(result){
      self.setState({savedList: result.data});
    });
  },
  removeFromSaved: function(removeMe){
    // call the api to remove an article from saved
    // then update state with new saved list
    console.log("Main removeFromSaved", removeMe);
    helpers.removeFromSaved(removeMe).then(function(data){
      console.log(data);
    })
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
            <Search saveHandler={this.updateSaved} />
            <Saved savedList={this.state.savedList} removeHandler={this.removeFromSaved} />
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
