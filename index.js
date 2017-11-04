// NOTE: If you have downloaded this code for your own use you will need to go to openweathermap.org. sign up and get your own API key to make it work. You can insert your API key on line 45 where it says "INSERT API KEY HERE".



cel = document.querySelector("#cel");
fah = document.querySelector("#fah");
temp = document.querySelector("#temp");
searchBut = document.querySelector("#searchBut");
dispLocation = document.querySelector("#currentlocation");
mainPageLocation = document.querySelector("#mainpagelocation");
mainPageSearchIcon = document.querySelector("#mainpagesearchicon");
mainPageSearch = document.querySelector("#mainpagesearch");
locationPageDiv = document.querySelector("#locationpage");
searchButton = document.querySelector("#searchbut");

var cel1;
var fah1;
var locator;
var cityLocated;

var longitude = 0;
var latitude = 0;




// EVENTS LISTENERS

// ALLOWS FOR LOCATION BUTTON TO FIND AND DISPLAY THE CURRENT LOCATIONS TEMPRETURE.
mainPageLocation.addEventListener ("click", function(){
  findLocation1();
  currentTemp();
});



// Functionality to the Fahrenheit button.
fah.addEventListener ("click", function(){
  temp.innerHTML = fah1+"°F" ;
});


// Functionality to the Celsius button.
cel.addEventListener ("click", function(){
  temp.innerHTML = cel1+"°C";
});


// SHOWS TEXT BOX ON MAIN PAGE WHEN MAGNIFIER IS CLICKED.
mainPageSearchIcon.addEventListener ("click", function(){
  mainPageSearch.classList.remove("hide");
  mainPageSearchIcon.classList.remove("mainicons");
  mainPageSearchIcon.classList.add("mainicons3","fader");
  mainPageSearch.classList.add("fader", "mainicons2");
  searchButton.classList.remove("hide");
});


// Search button to grab input and send to API



searchButton.addEventListener ("click", function(){
 cityLocated = mainPageSearch.value;
  cityLocation1();

});



// FUNCTIONS


// FIND YOUR CO-ORDINATES (LOCATION).
function findLocation1(){
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    currentTemp();
  })
}
}


// DISPLAY CURRENT TEMPRETURE IN CELSIUS.
function currentTemp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&' + 'lon=' + longitude + '&APPID=' + 'INSERT API KEY HERE' + '&units=metric');
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



// GETS TEMPRETURE FOR API BASED ON CITY.
function cityLocation1(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=cityLocation' + cityLocated + '&' + '&APPID=' + 'INSERT API KEY HERE' + '&units=metric');
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




// FIND CURRENT LOCATION AS SOON AS PAGE IS LOADED
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    currentTemp();
  })
}
