import React from "react";

class Search extends React.Component {
  state = { city: "" };

  render() {
    const formSubmit = event => {
      event.preventDefault();
    };

    return (
      <div>
        <input
          type="text"
          value={this.state.city}
          onChange={e => this.setState({ city: e.target.value })}
        />

        {this.state.city}
      </div>
    );
  }
}

export default Search;
