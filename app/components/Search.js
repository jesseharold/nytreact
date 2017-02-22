var React = require("react");

//var Form = require("./Form");
var Results = require("./Results");
var helpers = require("../utils/helpers");

var Search = React.createClass({
    getInitialState: function(){
        return {
            resultList: []
        };
    },
    handleSearch: function(event){
        event.preventDefault();
        var self = this;
        var queryResult = helpers.queryNYTimes("prince harry", 2000, 2010).then(function(results){
            self.setState({resultList: results});
        });
        return false;
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
                    <label htmlFor="searchYearStart">Start Year</label>
                    <input type="text" size="4" className="form-control" id="searchYearStart"/>
                    <label htmlFor="searchYearEnd">End Year</label>
                    <input type="text" size="4" className="form-control" id="searchYearEnd"/>
                    <button className="btn btn-primary btn-lg center-block" onClick={this.handleSearch}>Search</button>
                </form>
                </div>
            </div>
                <Results resultList={this.state.resultList}/>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Search;
