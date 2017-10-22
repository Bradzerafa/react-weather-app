var longitude = 0;
var latitude = 0;

function pos(){
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    console.log(longitude);
    console.log(latitude);
  })
}
}



function currentTemp() {

  
}
