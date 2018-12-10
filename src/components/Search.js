import React from "react";
import "./App.css";

class Search extends React.Component {
  state = { cityChosen: "" };

  formSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.cityChosen.toLowerCase());
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit} className="ui input">
          <input
            type="text"
            value={this.state.cityChosen}
            onChange={e => this.setState({ cityChosen: e.target.value })}
            placeholder="Search"
            required
          />
        </form>
      </div>
    );
  }
}

export default Search;
