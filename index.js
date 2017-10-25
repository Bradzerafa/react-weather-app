// NOTE: If you have downloaded this code for your own use you will need to go to opensourceweather.org. sign up and get your own API key to make it work. You can insert your API key on line 45 where it says "INSERT API KEY HERE".




cel = document.querySelector("#cel");
fah = document.querySelector("#fah");
temp = document.querySelector("#temp");
dispLocation = document.querySelector("#currentlocation");
var cel1;
var fah1;
var locator;

var longitude = 0;
var latitude = 0;

// FIND YOUR CO-ORDINATES (LOCATION).
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    currentTemp();
  })
}



// Functionality to the Fahrenheit button.
fah.addEventListener ("click", function(){
  temp.innerHTML = fah1+"°F" ;
});


// Functionality to the Celsius button.
cel.addEventListener ("click", function(){
  temp.innerHTML = cel1+"°C";
});




// DISPLAY CURRENT TEMPRETURE IN CELSIUS.
function currentTemp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&' + 'lon=' + longitude + '&APPID=' + *INSERT API KEY HERE* + '&units=metric');
  request.onload = function() {
    var ourData = JSON.parse(request.responseText);
    var wethData = ourData.main;
    locator = ourData.name;
    cel1 = Math.round(wethData.temp);
    temp.innerHTML = cel1+"°C";
    dispLocation.innerHTML = locator;
    fah1 = Math.round(wethData.temp * 1.8 + 32);
  };
request.send();
};
