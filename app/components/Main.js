var React = require("react");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers.js");

var Main = React.createClass({

  render: function() {
	    return (

	    <div className="container-fluid">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <a className="navbar-brand" href="#">Navbar</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Link</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link disabled" href="#">Disabled</a>
				      </li>
				    </ul>
				      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				  </div>
				</nav>
			<div className="container">

		        <div className="row">
		        	<div className="col-md-12">
				        <div className="jumbotron text-center">
				          <h2>What Is Your Home Worth?</h2>
				        </div>
			       	</div>
			  	</div>

		        <div className="row">
		          <div className="col-md-12">
		            <div className="panel panel-default">
		              <div className="panel-heading">
		                <h3 className="panel-title text-center">Child</h3>
		              </div>
		            </div>
		          </div>
		        </div>

	       	</div>

	    </div>

	    );
	}
});

// Export the component back for use in other files
module.exports = Main;
