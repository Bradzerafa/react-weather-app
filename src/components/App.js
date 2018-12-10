import React from "react";
import axios from "axios";
import Search from "./Search";
import "./App.css";

/*  
TO DO: 
- No change on error if its the first search.
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
      .then(
        res =>
          this.setState({
            weather: Math.floor(res.data.main.temp),
            city: res.data.name
          }),

        this.setState({ error: "" })
      )
      .catch(res => this.setState({ error: "Please enter a valid city" }));
  };

  cityData = data => {
    this.apiCall(data);
  };

  reset = () => {
    if (this.state.error !== "") {
      this.setState({ city: " ", weather: null });
    }

    if (this.state.city !== "") {
      this.setState({ error: "" });
    }
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
        <div className="city-found" onSubmit={this.reset}>
          <h3>
            {this.state.city} {this.state.weather}
          </h3>
          <Search onSubmit={this.cityData} />
        </div>
      );
    }

    if (this.state.error !== "") {
      return (
        <div className="search-city" onSubmit={this.reset}>
          <h2>{this.state.error}</h2>
          <Search onSubmit={this.cityData} />
        </div>
      );
    }
  }
}

export default App;
