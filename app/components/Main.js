// Include React
var React = require("react");
var Link = require('react-router').Link;

// Creating the Main component
var Main = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 className="text-center">New York Times<br />Article Search</h1>
            <p className="text-center">
              <em>Search for and annotate articles of interest</em>
            </p>
            <nav>
              <Link to="/search" className="navItem">Search</Link>
              <Link to="/saved" className="navItem">Saved&nbsp;Articles</Link>
            </nav>
          </div>
          <div className="col-md-12">
				    {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
