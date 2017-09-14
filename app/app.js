var React = require("react");
var ReactDOM = require("react-dom");

var Main = require("./components/Main.js");
var Value = require("./components/Value.js");

ReactDOM.render(<Main />, document.getElementById("app"));

ReactDOM.render(<Value />, document.getElementById("value"));
