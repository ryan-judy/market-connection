var axios = require("axios");

var apiKey = "35e5548c618555b1a43eb4759d26b260";
axios.defaults.headers.common['Authorization'] = "35e5548c618555b1a43eb4759d26b260";


var helpers = {
  runQuery: function(address1, address2) {
    console.log(address1 + address2);
  
    var queryURL = "https://search.onboard-apis.com/propertyapi/v1.0.0/avm/detail?address1=&"+ address1 + "&address2=" + address2;
    return axios.get(queryURL).then(function(response) {
      console.log(response);
      return response.data.results[0].formatted;
    });
  }
};

module.exports = helpers;