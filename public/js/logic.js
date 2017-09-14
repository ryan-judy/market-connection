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