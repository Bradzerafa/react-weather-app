import React from "react";
import axios from "axios";
import Search from "./Search";

// PLACE API KEY HERE!
const API_key = "API KEY HERE";

class App extends React.Component {
  state = {
    city: "Sydney",
    weather: null
  };

  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          this.state.city
        }&APPID=${API_key}&units=metric`
      )
      .then(res => this.setState({ weather: Math.ceil(res.data.main.temp) }));
  }

  render() {
    return (
      <div>
        <Search />
        {this.state.weather}
      </div>
    );
  }
}

export default App;
