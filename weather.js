$(function() {
var ori = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var key = "&key=AIzaSyBqJmnM1gvH8ESPlcJGjz0AZhr6cw4xW1I";
var dark = "017f3ac0086e46d4ee9d8ea494cd4670/";

$("#but2").on("click", function (){
  $("#stack li:last").fadeOut(function() {$(this).remove();});
});

$("#but").on("click", function() {
  var url = ori + $("#zipcode").val() + key;
  $("#zipcode").val("");
  $.ajax(url, {method: "GET"}).done(function(data) {
    var place = data.results[0].formatted_address;
    var lat = data.results[0].geometry.location.lat;
    var long = data.results[0].geometry.location.lng;
    var darkAddress = dark + lat + "," + long; //didn't work due to permissions
    $.ajax("https://api.darksky.net/forecast/" + dark + lat + "," + long, { dataType: "jsonp"}).done(function(data) {

      var temp = data.currently.temperature;
      var maxTemp = data.daily.data[0].temperatureMax;
      var minTemp = data.daily.data[0].temperatureMin;
      var humidity = data.currently.humidity;
      var summary = data.currently.summary;
      var preChance = data.daily.data[0].precipProbability * 100;
      var preType = data.daily.data[0].precipType;
      
    
      if (summary == "Clear") {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/clear.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");
      } else if (summary.includes('Cloudy' || 'cloudy')) {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/cloudy.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");
      } else if (summary.includes('Rain' || 'rain' || 'Rainy' || 'rainy')) {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/rain.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");
      } else if (summary.includes('Snow' || 'snow' || 'Blizzard' || 'blizard' || 'Winter' || 'winter' || 'Wintry' || 'wintry')) {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/snow.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");
      } else if (summary.includes('Sleet' || 'sleet')) {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/sleet.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");
      } else if (summary.includes('Hail' || 'hail')) {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/hail.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");
      } else if (summary.includes('Fog' || 'fog' || 'Foggy' || 'foggy')) {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/fog.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");  
      } else if (summary.includes('Storm' || 'storm' || 'Thunderstorm' || 'thunderstorm' || 'Thunderstorms' || 'thunderstorms')) {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/storm.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");
      } else if (summary.includes('Tornado' || 'tornado')) {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/tornado.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");
      } else if (summary.includes('Hurricane' || 'hurricane')) {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/hurricane.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");
      } else if (summary.includes('Flood' || 'flood' || 'Floods' || 'floods' || 'Flooding' || 'flooding')) {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/flood.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow"); 
      } else if (summary.includes('Sunny' || 'sunny' || 'Sunshine' || 'sunshine')) {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/sunny.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");
      } else {
        $("#stack").prepend('<li><div class = "col-xs-12 col-md-4"><h1 class = "temp">' + Math.round(temp) + "&#8457" + '</h1><h4 class = "sum">' + summary + '</h4><h3 class = "line"><hr /></h3><h5 class = "minTemp">' + Math.round(minTemp) + "&#8457" + '</h5><h5 class = "min">min</h5><h5 class = "maxTemp">' + Math.round(maxTemp) + '&#8457</h5><h5 class = "max">max</h5><h5 class = "preChance">' + Math.round(preChance) + '%</h5><h5 class = "pre">Precipitation</h5><h4 class = "place">' + place + '</h4><img src = "images/default.jpg"></div></li>') && $("#stack li:first").hide().fadeIn("slow");
      } 
        
    });
      
  });
  
});









});
