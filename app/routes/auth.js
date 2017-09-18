var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/value',
        failureRedirect: '/'
        }
    ));
    app.get('/value',isLoggedIn, authController.value);

    function isLoggedIn(req, res, next) {
     
        if (req.isAuthenticated())
         
            return next();
             
        res.redirect('/');
     
    }

    app.get('/logout', authController.logout);

};