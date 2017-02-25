var React = require("react");

var Savebutton = React.createClass({
    getInitialState: function() {
        return { 
            buttonOnText: "Save",
            buttonOffText: "Saved",
            buttonOff: false, 
            buttonOffStyle: {backgroundColor: "#666", borderColor: "#777"}
        };
    },
    saveClicked: function(){
        this.setState({buttonOff: true, buttonText: "Saved"});
        this.props.clickHandler();
    },
    render: function() {
        return (
            <button className="btn btn-info btn-xs pull-right" style={this.state.buttonOff ? this.state.buttonOffStyle : {}} onClick={this.state.buttonOff ? null : this.saveClicked}>{this.state.buttonOff ? this.state.buttonOffText : this.state.buttonOnText }</button>
        );
    }
});

// Export the component back for use in other files
module.exports = Savebutton;
