$(document).ready(function() {


$(document).on("click", "#eval", insertUser);

function insertUser(event) {
    event.preventDefault();
    var user = {
      address: $("#address")
        .val()
        .trim(),
        zip: $("#zip").val().trim()

    }
    $.ajax({url: "/", data: { "address": user.address }, success: function(data){
    }});
    $(".user-address").prepend(user.address + " " + user.zip);
    $(".user-address-input").attr("value", user.address + "," + user.zip);
    $(".user-address-input").attr("name", "address");


};


  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;

      }
    }
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 48
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {

      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({address:$('#address').val(),region:'no'},function(results,status){
      if(status.toLowerCase() == 'ok'){
        var coords = new google.maps.LatLng(results[0]['geometry']['location'].lat(),results[0]['geometry']['location'].lng());
       console.log(coords.lat());
        console.log(coords.lng());
      }
    });

  
  
var a,lat,long;
var zip;
var markerimg = 'https://i.imgur.com/Qwv4lBZ.png';

function initialize() {
    document.getElementById("info").style.backgroundImage = "url(https://maps.googleapis.com/maps/api/staticmap?center=toronto&zoom=15&scale=1&size=700x420&maptype=roadmap&format=png&visual_refresh=true&markers=icon:"+markerimg+"%7Cshadow:true%7Ctoronto)";

    var searchBox = document.getElementById('address');
    var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(43.7182713,-79.3777061));

    var input = document.getElementById('address');
    var autocomplete = new google.maps.places.Autocomplete(searchBox,defaultBounds);
  
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      var place = autocomplete.getPlace();
      for (var i = 0; i < place.address_components.length; i++) {
      for (var j = 0; j < place.address_components[i].types.length; j++) {
        if (place.address_components[i].types[j] == "postal_code") {
          place.address_components[i].long_name;
                $("#zip").attr("value", place.address_components[i].long_name);

        }
      }
    }
      a = place.formatted_address;
      lat = place.geometry.location.lat();
      long = place.geometry.location.lng();
      document.getElementById("info").style.backgroundImage = "url(https://maps.googleapis.com/maps/api/staticmap?center="+lat+','+long+"&zoom=15&scale=1&size=700x420&maptype=roadmap&format=png&visual_refresh=true&markers=icon:"+markerimg+"%7Cshadow:true%7C"+lat+','+long+")";
    });
     
};
google.maps.event.addDomListener(window, 'load', initialize);


});