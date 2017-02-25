var React = require("react");

var Savebutton = React.createClass({
    getInitialState: function() {
        return { 
            buttonOnText: "Save",
            buttonOffText: "Saved",
            buttonOff: false, 
            buttonOffStyle: {backgroundColor: "#666", borderColor: "#777", cursor: "default"},
            commentBoxStyle: {display: "none"},
            commentText: "Add a comment..."
        };
    },
    doSave: function(){
        this.setState({buttonOff: true, buttonText: "Saved"});
        if (this.state.commentText  === "Add a comment..." || this.state.commentText.length < 2){
            this.props.clickHandler("");
        } else {
            this.props.clickHandler(this.state.commentText);
        }
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
    clearComment: function(event){
        if (event.target.value == "Add a comment..."){
            this.setState({commentText: " "});
        }
    },
    updateComment: function(event){
        this.setState({commentText: event.target.value});
    },
    render: function() {
        return (
            <div className="saveButtonHolder" onMouseEnter={this.showComment} onMouseLeave={this.hideComment}>
                <button className="btn btn-info btn-xs pull-right" style={this.state.buttonOff ? this.state.buttonOffStyle : {}} onClick={this.state.buttonOff ? null : this.doSave}>{this.state.buttonOff ? this.state.buttonOffText : this.state.buttonOnText }</button>
                <textarea cols="20" rows="4" onFocus={this.clearComment} onChange={this.updateComment} style={this.state.commentBoxStyle} className="saveAnnotation">{this.state.commentText}</textarea>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Savebutton;
