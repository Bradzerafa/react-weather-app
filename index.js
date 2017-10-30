// NOTE: If you have downloaded this code for your own use you will need to go to openweathermap.org. sign up and get your own API key to make it work. You can insert your API key on line 45 where it says "INSERT API KEY HERE".



//**** FIX ****
// NOTE: CHECK IF CELSIUS AND FAHRENHEIT BUTTONS WORK WHEN YOU SEARCH YOUR OWN DESTINATION.

cel = document.querySelector("#cel");
fah = document.querySelector("#fah");
temp = document.querySelector("#temp");
searchBut = document.querySelector("#searchBut");
locateCity = document.querySelector("#locateCity");
dispLocation = document.querySelector("#currentlocation");
var cel1;
var fah1;
var locator;
var cityLocation;

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
  temp.innerHTML = fah1+"°F" ;
});


// Functionality to the Celsius button.
cel.addEventListener ("click", function(){
  temp.innerHTML = cel1+"°C";
});




// DISPLAY CURRENT TEMPRETURE IN CELSIUS.
function currentTemp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&' + 'lon=' + longitude + '&APPID=' + '' + '&units=metric');
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


// Search button to grab input and send to API
searchBut.addEventListener ("click", function(){
  cityLocation = locateCity.value;
  console.log(cityLocation);
  cityLocation1();
});


// GETS TEMPRETURE FOR API BASED ON CITY.
function cityLocation1(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=cityLocation' + cityLocation + '&' + '&APPID=' + '' + '&units=metric');
  request.onload = function() {
    var ourData = JSON.parse(request.responseText);
    var wethData = ourData.main;
    cel1 = Math.round(wethData.temp);
    temp.innerHTML = cel1+"°C";
    fah1 = Math.round(wethData.temp * 1.8 + 32);
};
request.send();
};
