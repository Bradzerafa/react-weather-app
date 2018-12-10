import React from "react";
import axios from "axios";
import Search from "./Search";
import "./App.css";

// PLACE API KEY HERE!
const API_key = "";

class App extends React.Component {
  state = {
    city: "",
    error: "",
    weather: null,
    condition: ""
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
            city: res.data.name,
            condition: res.data.main
          }),
        console.log(this.state.condition),
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
    if (
      this.state.city === "" &&
      this.state.weather === null &&
      this.state.error !== ""
    ) {
      return (
        <div className="search-city" onSubmit={this.reset}>
          <h2>{this.state.error}</h2>
          <Search onSubmit={this.cityData} />
        </div>
      );
    }

    if (this.state.city === "" && this.state.weather === null) {
      return (
        <div className="search-city">
          <h2>Search a city</h2>
          <Search onSubmit={this.cityData} />
        </div>
      );
    }

    if (this.state.city !== "" && this.state.error === "") {
      return (
        <div className="city-found" onSubmit={this.reset}>
          <h2>
            {this.state.city} {this.state.weather}°C
          </h2>
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
