var authController = require('../controllers/authcontroller.js');
var apiController = require('../controllers/apicontroller.js');

module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/value',
        failureRedirect: '/'
        }
    ));

    app.get('/value', isLoggedIn, apiController.getValue, apiController.getPropertyDetails);

    function isLoggedIn(req, res, next) {
     
        if (req.isAuthenticated())
         
            return next();
             
        res.redirect('/');
     
    }

    app.get('/logout', authController.logout);

    app.get('/signin', authController.signin);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/value',
 
        failureRedirect: '/'
    }
    ));

    //app.post('/signin', passport.authenticate('local-signin', function(req, res) {
    //    res.redirect('/value/' + req.user.address);
    //    console.log(req.user.address);
    //});

};