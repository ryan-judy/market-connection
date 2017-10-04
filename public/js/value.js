$(document).ready(function() {

$('input[type="range"]').rangeslider();

$(window).on('resize', function() {
    if($(window).width() < 959) {
        $('.navbar-brand img').attr("src", "./img/location-marker.png");
        $('#one').removeClass("order-1");
        $('#one').addClass("order-12");
        $('#two').removeClass("order-12");
        $('#two').addClass("order-1");
    }
    else {
        $('.navbar-brand img').attr("src", "./img/location-marker-white.png");
        $('#two').removeClass("order-12");
        $('#two').addClass("order-1");
        $('#one').removeClass("order-1");
        $('#one').addClass("order-12");
    }
});

 window.sr = ScrollReveal();
  sr.reveal('.sr-hero', {
    duration: 600,
    delay: 200
  });
  sr.reveal('.sr-hero-cta', {
    duration: 600,
    delay: 200
  });
  sr.reveal('.sr-address', {
    duration: 600,
    delay: 200
  }); 
  sr.reveal('.sr-map', {
    duration: 600,
    delay: 200
  });  
  sr.reveal('.sr-chart', {
    duration: 600,
    delay: 200
  });    
  sr.reveal('.sr-home', {
    duration: 600,
    delay: 200
  });    
  sr.reveal('.sr-button', {
    duration: 600,
    delay: 200
  });      


var locations = [
      [1],
      [2],
      [3],
      [4],
      [5],
      [6],
      [7],
      [8],
      [9],
      [10]
    ];

$('.sale-location-lat').each(function(index,data) {
   var locLat = parseFloat($(this).val().trim());
    locations[index].push(locLat);
});

$('.sale-location-lon').each(function(index,data) {
   var locLon = parseFloat($(this).val().trim());
    locations[index].push(locLon);
});

$('.sale-location-name').each(function(index,data) {
   var name = $(this).val().trim();
    console.log(name);
    locations[index].push(name);
});

var mapLat= parseFloat($('.sale-location-lat').val().trim());
var mapLon= parseFloat($('.sale-location-lon').val().trim());


console.log(locations)
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(mapLat, mapLon),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: 
[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "saturation": "100"
            },
            {
                "lightness": "100"
            },
            {
                "gamma": "10.00"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fea0a0"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fea0a0"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fea0a0"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fea0a0"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fae7e7"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fea0a0"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fea0a0"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fea0a0"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "-12"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fbd5d5"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffdfdf"
            },
            {
                "lightness": "-3"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#716d6d"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fec0c0"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#86a9d6"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fba4a4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'https://i.imgur.com/Eoughjw.png'
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][3]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }    

var dataArr = [];
$('.chart').each(function(index,data) {
   var plot = $(this).val();
    plot = parseInt(plot);
    dataArr.push(plot);
    });
    console.log(dataArr)

      var lineChartData = {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
    datasets: [{
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgb(143,9,9)",
        pointColor: "rgb(143,9,9)",
        data: dataArr
    }]

}

var unitsArr = [];
$('.units').each(function(index,data) {
   var unitplot = $(this).val();
    unitplot = parseInt(unitplot);
    unitsArr.push(unitplot);
    });
    console.log(unitsArr)

      var barChartData = {
    labels: ["2016 Q1", "2017 Q2", "2017 Q3", " 2017 Q4", "2016 Q1", "2106 Q2", "2016 Q3", "2016 Q4", "2017 Q1", "2017 Q2", "2017 Q3"],
    datasets: [{
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgb(143,9,9)",
        pointColor: "rgb(143,9,9)",
        data: unitsArr
    }]

}


Chart.defaults.global.animationSteps = 250;
Chart.defaults.global.tooltipYPadding = 16;
Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.tooltipTitleFontStyle = "normal";
Chart.defaults.global.tooltipFillColor = "rgba(23,64,97,0.8)";
Chart.defaults.global.animationEasing = "easeOutBounce";
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleLineColor = "black";
Chart.defaults.global.scaleFontSize = 16;

var ctx = document.getElementById("canvas").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(lineChartData, {
    pointDotRadius: 10,
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "black"
});

var ctxTwo = document.getElementById("canvasTwo").getContext("2d");
var BarChartDemo = new Chart(ctxTwo).Bar(barChartData, {
    scales: {
    xAxes: [{
                gridLines: {
                    display:false
                }
            }],
    yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
    }

});

$(".toggler").click(function(){
  $(this).find('i').toggleClass('down');
});


var avmInput = $(".avmInput").val().trim();
var avmString = numeral(avmInput).format('0,0');
$(".avm").html("$" + avmString);

var avmInputLow = $(".avmInputLow").val().trim();
var avmInputLowString = numeral(avmInputLow).format('0,0');
$(".avm-low").html("$" + avmInputLowString + " - ");

var avmInputHigh = $(".avmInputHigh").val().trim();
var avmInputLowString = numeral(avmInputHigh).format('0,0');
$(".avm-high").html("$" + avmInputLowString);

});