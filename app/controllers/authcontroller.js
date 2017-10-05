var axios = require("axios");
//var rangeslider = require("rangeslider.js");

//var userAddress = req.params.address;

axios.defaults.headers.common['Accept'] = "application/json";       
axios.defaults.headers.common['apikey'] = "3a605d4c54cb37c9ca57c67d6469b1f9";


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