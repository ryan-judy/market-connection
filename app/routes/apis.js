//var api = require("../controllers/apicontroller.js");
//
//module.exports = function(app) {
////console.log(api.getValue());
//app.get("/value/eval", function(req, res) {
//  console.log("got")
//     api.getValue().then(function(err, data) {
//      console.log(data);
//      if (err) {
//        throw err;
//      }
//      res.render("value", { eval: data });
//    });
//});
//
//app.get("/value", function(req, res) {
//  api.getPropertyDetails().then(function(data) {
//    res.render("value", { details: data });
//  });
//});
//
//};
