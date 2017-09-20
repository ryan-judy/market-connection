var axios = require("axios");
//var rangeslider = require("rangeslider.js");

//var userAddress = req.params.address;

axios.defaults.headers.common['Accept'] = "application/json";       
axios.defaults.headers.common['apikey'] = "1e51e1c38758ccd4c0cc119e92223a3d";


var exports = module.exports = {}


exports.signup = function(req,res){

	res.render('index'); 

}


exports.signin = function(req, res) {
 
    res.render('index');
 
}

exports.logout = function(req,res){
	  req.session.destroy(function(err) {
	  res.redirect('/');
  });
}