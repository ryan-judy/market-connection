$(document).ready(function() {

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
      styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "gamma": "0.00"
            },
            {
                "lightness": "74"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
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
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#ff0000"
            },
            {
                "saturation": "-15"
            },
            {
                "lightness": "40"
            },
            {
                "gamma": "1.25"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#971c1c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "7"
            },
            {
                "lightness": "15"
            },
            {
                "gamma": "1.95"
            },
            {
                "weight": "1.00"
            },
            {
                "color": "#646464"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#baa1a1"
            },
            {
                "weight": "1.20"
            },
            {
                "lightness": "12"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "lightness": "80"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#efefef"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
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

Chart.defaults.global.animationSteps = 50;
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