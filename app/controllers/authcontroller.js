var exports = module.exports = {}


exports.signup = function(req,res){

	res.render('index'); 

}


exports.value = function(req,res){

	res.render('value'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}