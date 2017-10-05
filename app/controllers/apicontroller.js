var axios = require("axios");
//var rangeslider = require("rangeslider.js");
//var userAddress = req.params.address;

axios.defaults.headers.common['Accept'] = "application/json";       
axios.defaults.headers.common['apikey'] = "3a605d4c54cb37c9ca57c67d6469b1f9";


module.exports = {

apiCall: function(req, res) {
  var userAddressTrim = req.user.address;
    userAddressTrim = userAddressTrim.split(',');
      console.log(userAddressTrim)

    delete userAddressTrim[3];

var queryURL = "https://search.onboard-apis.com/propertyapi/v1.0.0/avm/detail?address1=" + userAddressTrim[0] + "&address2=" + userAddressTrim[1] + userAddressTrim[2]+"";
  var queryURL2 = "https://search.onboard-apis.com/propertyapi/v1.0.0/sale/snapshot?address1=" + userAddressTrim[0] + "&address2=" + userAddressTrim[1] + userAddressTrim[2]+"&radius=.25&minsaleamt=40000";
    var queryURL3 = "https://search.onboard-apis.com/propertyapi/v1.0.0/salestrend/snapshot?geoid=ZI" + userAddressTrim[4] + "&interval=monthly&startyear=2017&endyear=2017&startmonth=january&endmonth=december";
      var queryURL4 = "https://search.onboard-apis.com/propertyapi/v1.0.0/salestrend/snapshot?geoid=ZI" + userAddressTrim[4] + "&interval=quarterly&startyear=2015&endyear=2017&startmonth=january&endmonth=december";
  console.log(queryURL);
  axios.get(queryURL),
  axios.get(queryURL2),
  axios.get(queryURL3),
  axios.get(queryURL4)

function getAvmData() {
  return axios.get(queryURL);
}

function getSaleData() {
  return axios.get(queryURL2);
}

function getSaleTrends() {
  return axios.get(queryURL3);
}

function getSaleUnits() {
  return axios.get(queryURL4);
}

axios.all([getAvmData(), getSaleData(), getSaleTrends(), getSaleUnits()])
  .then(axios.spread(function (avm, sale, trends, units) {
    var userAddress = userAddressTrim.join();
    userAddress = userAddress.replace(/,/g, "");   
    var data = avm.data.property[0];
    data.address = userAddress;
    data.sale = sale.data;
    data.units = units.data.salestrends;
    data.trends = trends.data.salestrends;
    console.log(data)
      //  console.log(data)
    res.render("value", { avm : data } );
  }))
}

}; 