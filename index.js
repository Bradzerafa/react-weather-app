// DELETE CONSOLE LOGS IN FUNCTIONS.

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
    console.log(longitude);
    console.log(latitude);
    currentTemp();
  })
}



// Functionality to the Fahrenheit button.
fah.addEventListener ("click", function(){
  currentTemp1();
  temp.innerHTML = fah1+"°F" ;
});


// Functionality to the Celsius button.
cel.addEventListener ("click", function(){
  currentTemp();
  temp.innerHTML = cel1+"°C";

});







// DISPLAY CURRENT TEMPRETURE IN CELSIUS.
function currentTemp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?'+'lat='+ latitude + '&' + 'lon=' + longitude);
  request.onload = function() {
    var ourData = JSON.parse(request.responseText);
    console.log(ourData.main);
    var wethData = ourData.main;
    locator = ourData.name;
    cel1 = Math.round(wethData.temp);
    temp.innerHTML = cel1+"°C";
    //dispLocation.innerHTML = locator;
    fah1 = Math.round(wethData.temp * 1.8 + 32);
    console.log(wethData.temp * 1.8 + 32);
  };
request.send();
};



// DISPLAY CURRENT TEMPRETURE FOR FAHRENHEIT.
function currentTemp1() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?'+'lat='+ latitude + '&' + 'lon=' + longitude);
  request.onload = function() {
    var ourData = JSON.parse(request.responseText);
    console.log(ourData.main);
    var wethData = ourData.main;
    locator = ourData.name;
    cel1 = Math.round(wethData.temp);
    temp.innerHTML = fah1+"°F";
    //dispLocation.innerHTML = locator;
    fah1 = Math.round(wethData.temp * 1.8 + 32);
    console.log(wethData.temp * 1.8 + 32);
  };
request.send();
};
