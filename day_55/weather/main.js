$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(function(location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    console.log(location.coords.accuracy);
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;
    $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?APPID=8453294db1ca526ff526923f91c1e1cb&lat=" + latitude + "&lon=" + longitude + "&units=metric"
    }).
    done(function(data){
      $("#weather").html("The weather in " + data.name + " is " + (data.main.temp) + " \u00B0C");
    }).
    fail(function(){
      alert("Can't fetch weather data");
    });
  });
});
