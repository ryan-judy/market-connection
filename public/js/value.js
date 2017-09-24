$(document).ready(function() {

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({address:$('#mapAddress').val(),region:'no'},function(results,status){
      if(status.toLowerCase() == 'ok'){
        var coords = new google.maps.LatLng(results[0]['geometry']['location'].lat(),results[0]['geometry']['location'].lng());
       console.log(coords.lat());
        console.log(coords.lng());
      }
    });


});