var React = require("react");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers.js");

var Value = React.createClass({

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


        </div>

      </div>

    </div>

	    );
	}
});

// Export the component back for use in other files
module.exports = Value;
