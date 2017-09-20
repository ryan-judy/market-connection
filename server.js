var express = require('express');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars')
var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./app/models");
//For Handlebars
app.set('views', './views')

app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(express.static("./public"));
app.use(methodOverride("_method"));


require("./app/controllers/user_controller")(app);

db.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine');
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
});

//Routes
require("./app/routes/auth.js")(app, passport);
//load passport strategies
require("./app/config/passport/passport.js")(passport, db.user);
 
 
app.listen(3000, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});