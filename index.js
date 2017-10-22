temp = document.querySelector("#temp");
var longitude = 0;
var latitude = 0;

// FIND YOUR CO-ORDINATES (LOCATION).
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    console.log(longitude);
    console.log(latitude);
  })
}



// DISPLAY CURRENT TEMPRETURE.
function currentTemp() {
// Add .??? to change the paragraph tag to the current weather in celsius or farenheight   temp.innerHTML = "#";

}
