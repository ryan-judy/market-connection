var db = require("../models");

module.exports = function(app) {

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/", function(req, res) {
    db.User.create({
      address: req.body.address,
    }).then(function(err, res) {
	 return res.render("value");
    });
});


};