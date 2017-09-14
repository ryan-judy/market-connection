var React = require("react");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers.js");

var Main = React.createClass({

  render: function() {
	    return (


    <div className="site-wrapper">

      <div className="site-wrapper-inner">

        <div className="container">

          <div className="masthead clearfix">
            <div className="container inner">
              <h3 className="masthead-brand">Market Connection</h3>
              <nav>
                <ul className="nav masthead-nav">
                  <li className="active"><a href="#">Profile</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="inner cover">
            <h1 className="cover-heading">Whats Your Home Worth?</h1>
            <p className="lead">Fill out your address to get started.</p>
            <form>
            <div className = "row">
              <div className = "col-md-3">
              </div>
                <div className = "col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      data-type="google-autocomplete"
                      className="form-control text-center"
                      id="term"
                      required
                    />
                    </div>
                </div>
              <div className = "col-md-3">
              </div>
              </div>
              </form>
            <p className="lead">
              <a href="#" className="btn btn-lg btn-default" onClick = "/value">Get Your Market Analysis</a>
            </p>
          </div>

        </div>

      </div>

    </div>

	    );
	}
});

// Export the component back for use in other files
module.exports = Main;
