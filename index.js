cel = document.querySelector("#cel");
fah = document.querySelector("#fah");
temp = document.querySelector("#temp");
var cel1;
var fah1;

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



// DISPLAY CURRENT TEMPRETURE.
function currentTemp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?'+'lat='+ latitude + '&' + 'lon=' + longitude);
  request.onload = function() {
      var ourData = JSON.parse(request.responseText);
  console.log(ourData.main);
  var wethData = ourData.main;
  cel1 = Math.round(wethData.temp);
  temp.innerHTML = cel1+"°C";
  fah1 = Math.round(wethData.temp * 1.8 + 32);
  console.log(wethData.temp * 1.8 + 32);


  };
request.send();

};


// Functionality to the Fahrenheit button.
fah.addEventListener ("click", function(){
  temp.innerHTML = fah1+"°F" ;
});


// Functionality to the Celsius button.
cel.addEventListener ("click", function(){
  temp.innerHTML = cel1+"°C";

});
