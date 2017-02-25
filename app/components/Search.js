var React = require("react");

var Results = require("./Results");
var helpers = require("../utils/helpers");

var Search = React.createClass({
    getInitialState: function(){
        return {
            resultList: []
        };
    },
    popUp: function(msg){
        alert(msg);
    },
    handleSearch: function(event){
        event.preventDefault();
        var self = this;
        var topic = document.getElementById("searchTopic").value;
        var yearStart = document.getElementById("searchYearStart").value;
        var yearEnd = document.getElementById("searchYearEnd").value;
        // validate input
        if (topic.length < 2){
            return this.popUp("You must enter a search term with at least 2 letters.");
        }
        if (yearStart.length !== 4 || yearEnd.length !== 4){
            return this.popUp("Please enter a range of years for your search in YYYY format.");
        }
        if (parseInt(yearStart) > parseInt(yearEnd)){
            return this.popUp("The start date must occur before the end date.");
        }
        // perform the query and update state
        var queryResult = helpers.queryNYTimes(topic, yearStart, yearEnd).then(function(results){
            self.setState({resultList: results});
        });
        return false;
    }, 
    handleSave: function(saveThisArticle, comment) {
        // call the api to create a new saved article,
        // then update state with new saved list
        if(comment){
            // comment comes up from child component Savebutton
            saveThisArticle.comment = comment;
        }
        helpers.postSaved(saveThisArticle).then(function(){
            console.log("save complete.");
        });
    },
    render: function() {
        return (
            <div className="row">
                <div className="panel panel-default">
                <div className="panel-heading">
                <h2 className="text-center">Search the New York Times' Archive</h2>
                </div>
                <div className="panel-body">
                <form>
                    <label htmlFor="searchTopic">Topic</label>
                    <input type="text" className="form-control" id="searchTopic"/>
                    <label htmlFor="searchYearStart">Start Year (inclusive)</label>
                    <input type="text" size="4" className="form-control" id="searchYearStart"/>
                    <label htmlFor="searchYearEnd">End Year (inclusive)</label>
                    <input type="text" size="4" className="form-control" id="searchYearEnd"/>
                    <button className="btn btn-primary btn-lg center-block" onClick={this.handleSearch}>Search</button>
                </form>
                </div>
            </div>
                <Results saveHandler={this.handleSave} resultList={this.state.resultList}/>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Search;
