var mongoose = require("mongoose");
var Schema = mongoose.Schema;
passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: Date
  },
  address: {
    type: String
  },
  date: {
   	type: Date
  }
});

var options = ({missingPasswordError: "Wrong password"});
UserSchema.plugin(passportLocalMongoose,options);

var User = mongoose.model("User", UserSchema);

module.exports = User;
