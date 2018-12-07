import React from "react";

class Search extends React.Component {
  state = { cityChosen: "" };

  formSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.cityChosen.toLowerCase());
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            value={this.state.cityChosen}
            onChange={e => this.setState({ cityChosen: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default Search;
