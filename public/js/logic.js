

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

  

function initAutocomplete() {
	const input = document.querySelector('[data-type=google-autocomplete]');
	const autocomplete = new google.maps.places.Autocomplete(
      input,
      { types: ['geocode'] }
	);
	
	autocomplete.addListener('place_changed', () => {
		const selectedPlace = autocomplete.getPlace();
		console.log(selectedPlace);
		document.getElementById('output').innerHTML = selectedPlace.adr_address;
	});
}


const script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&callback=initAutocomplete';

document.body.appendChild(script);


$("#eval").on("click", function() {

var newAddress= $("#term").val();
console.log(newAddress);

    axios.defaults.headers.common['Accept'] = "application/json";     	
    axios.defaults.headers.common['apikey'] = "1e51e1c38758ccd4c0cc119e92223a3d";

    var queryURL = "https://search.onboard-apis.com/propertyapi/v1.0.0/avm/detail?address1=4529%20Winona%20Court&address2=Denver%2C%20CO";
     axios.get(queryURL).then(function(response) {

      console.log(response.data.property[0].avm.amount.value);
      console.log(response.data.property[0].avm.amount.high);
      console.log(response.data.property[0].avm.amount.low);

      console.log(response.data.property[0].building.rooms.bathstotal);
      console.log(response.data.property[0].building.parking.prkgSpaces);
      console.log(response.data.property[0].building.size.bldgsize);
      console.log(response.data.property[0].summary.yearbuilt);

      });

 });


var rangeslider = require("rangeslider.js");

$('input[type="range"]').rangeslider();

    // Destroy all plugin instances created from the
    // e.g. $('input[type="range"]') elements.
    $('input[type="range"]').rangeslider('destroy');

    // Update all rangeslider instances for all
    // e.g. $('input[type="range"]') elements.
    // Usefull if you changed some attributes e.g. `min` or `max` etc.
    $('input[type="range"]').rangeslider('update', true);