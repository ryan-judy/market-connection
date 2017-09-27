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
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
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
Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
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

});