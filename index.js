temp = document.querySelector("#temp");
var longitude = 0;
var latitude = 0;

// FIND YOUR CO-ORDINATES (LOCATION).
/*if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    console.log(longitude);
    console.log(latitude);
  })
}
*/



// DISPLAY CURRENT TEMPRETURE.
function currentTemp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139');
  request.onload = function() {
      var ourData = JSON.parse(request.responseText);
  console.log(ourData.main);
  var wethData = ourData.main;
  temp.innerHTML = wethData.temp;


  };
request.send();


// Add .??? to change the paragraph tag to the current weather in celsius or farenheight   temp.innerHTML = "#";

};
