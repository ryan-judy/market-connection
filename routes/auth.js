var authController = require('../controllers/auth_controller.js');
 
module.exports = function(app, passport) {
 
    app.get('/', authController.signup);
    app.post('/', passport.authenticate('local-signup', {
        successRedirect: '/value',
        failureRedirect: '/'
        }
    ));
    app.get('/value',isLoggedIn, authController.value);

    app.get('/logout', authController.logout);

    function isLoggedIn(req, res, next) {
     
        if (req.isAuthenticated())
         
            return next();
             
        res.redirect('/');
     
    }

};