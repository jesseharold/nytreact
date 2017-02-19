var React = require("react");

var Form = require("./Form");
var Results = require("./Results");

var Search = React.createClass({
    getInitialState: function(){
        return {
            resultList: []
        };
    },
    render: function() {
        return (
            <div className="row">
                <Form />
                <Results resultList={this.state.resultList}/>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Search;
