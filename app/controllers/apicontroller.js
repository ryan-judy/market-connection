var axios = require("axios");
//var rangeslider = require("rangeslider.js");
//var userAddress = req.params.address;

axios.defaults.headers.common['Accept'] = "application/json";       
axios.defaults.headers.common['apikey'] = "1e51e1c38758ccd4c0cc119e92223a3d";

module.exports = {

getValue: function(req, res) {
  console.log("load")
  var queryURL = "https://search.onboard-apis.com/propertyapi/v1.0.0/avm/detail?address1=4529%20Winona%20Court&address2=Denver%2C%20CO";
  axios.get(queryURL).then(function(response) {
    //console.log(response.data.property[0].avm.amount.value);
    //console.log(response.data.property[0].avm.amount.high);
    //console.log(response.data.property[0].avm.amount.low);
    return response.data.property[0].avm.amount;

  }).then(function(data) {
    console.log(req.user.address)
    data.address = req.user.address;
    console.log(data);
    res.render("value", { eval: data });
  });
},

getPropertyDetails: function(req, res) {
  var queryURL = "https://search.onboard-apis.com/propertyapi/v1.0.0/avm/detail?address1=4529%20Winona%20Court&address2=Denver%2C%20CO";
  axios.get(queryURL).then(function(response) {

    console.log(response.data.property[0].building.rooms.bathstotal);
    console.log(response.data.property[0].building.parking.prkgSpaces);
    console.log(response.data.property[0].building.size.bldgsize);
    console.log(response.data.property[0].summary.yearbuilt);
    response.data.property[0]

  });
}

}; 