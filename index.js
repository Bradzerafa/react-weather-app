cel = document.querySelector("#cel");
fah = document.querySelector("#fah");
temp = document.querySelector("#temp");
var cel1;
var fah1;

var longitude = 0;
var latitude = 0;

// FIND YOUR CO-ORDINATES (LOCATION).
function getDest(){
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    console.log(longitude);
    console.log(latitude);
  })
}
}



// DISPLAY CURRENT TEMPRETURE.
function currentTemp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?'+'lat='+ latitude + '&' + 'lon=' + longitude);
  request.onload = function() {
      var ourData = JSON.parse(request.responseText);
  console.log(ourData.main);
  var wethData = ourData.main;
  cel1 = wethData.temp;
  temp.innerHTML = cel1;
  fah1 = wethData.temp * 1.8 + 32;
  console.log(wethData.temp * 1.8 + 32);


  };
request.send();

};

// Functionality to the Fahrenheit button.
fah.addEventListener ("click", function(){
  temp.innerHTML = fah1;
});

// Functionality to the Celsius button.
cel.addEventListener ("click", function(){
  temp.innerHTML = cel1;

});
