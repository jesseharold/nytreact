var React = require("react");

var Savebutton = React.createClass({
    getInitialState: function() {
        return { 
            buttonOnText: "Save",
            buttonOffText: "Saved",
            buttonOff: false, 
            buttonOffStyle: {backgroundColor: "#666", borderColor: "#777", cursor: "default"},
            commentBoxStyle: {display: "none"}
        };
    },
    saveClicked: function(){
        this.setState({buttonOff: true, buttonText: "Saved"});
        this.props.clickHandler();
    },
    showComment: function(){
        if (!this.state.buttonOff){
            // only show comment before someone saves
            this.setState({commentBoxStyle: {display: "block"}});
        }
    },
    hideComment: function(){
        this.setState({commentBoxStyle: {display: "none"}});  
    },
    render: function() {
        return (
            <div className="saveButtonHolder" onMouseEnter={this.showComment} onMouseLeave={this.hideComment}>
                <button className="btn btn-info btn-xs pull-right" style={this.state.buttonOff ? this.state.buttonOffStyle : {}} onClick={this.state.buttonOff ? null : this.saveClicked}>{this.state.buttonOff ? this.state.buttonOffText : this.state.buttonOnText }</button>
                <textarea cols="20" rows="4" placeholder="Add a comment..." style={this.state.commentBoxStyle} className="saveAnnotation"></textarea>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Savebutton;
