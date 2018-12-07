import React from "react";
import axios from "axios";
import Search from "./Search";
import "./App.css";

/*  
TO DO: 
- Make sure render doesnt show city until the weather is found.
- Change UI.
*/

// PLACE API KEY HERE!
const API_key = "3ca3bcc92b1f50b93f61b4cab143e8d3";

class App extends React.Component {
  state = {
    city: "",
    error: "",
    weather: null
  };

  apiCall = cityChosen => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityChosen}&APPID=${API_key}&units=metric`
      )
      .then(res => this.setState({ weather: Math.floor(res.data.main.temp) }))
      .catch(result => this.setState({ error: "Please enter a valid city" }));
    console.log("hello");
  };

  cityData = data => {
    this.setState({ city: data });
    this.apiCall(data);
  };

  render() {
    if (this.state.city === "" && this.state.weather === null) {
      return (
        <div className="search-city">
          <h2>Please search for a city</h2>
          <Search onSubmit={this.cityData} />
        </div>
      );
    }

    if (this.state.city !== "" && this.state.error === "") {
      return (
        <div className="city-found">
          <h3>
            {this.state.city} {this.state.weather}
            {this.state.error}
          </h3>
          <Search onSubmit={this.cityData} />
        </div>
      );
    }

    if (this.state.error !== "") {
      return (
        <div className="search-city">
          <h2>{this.state.error}</h2>
          <Search onSubmit={this.cityData} />
        </div>
      );
    }
  }
}

export default App;
