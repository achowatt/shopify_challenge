import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        className="search-input"
        type="text"
        onChange={(e) => this.props.onSubmit(e.target.value)}
        placeholder="Search Your Favourite Movie"
      />
    );
  }
}

export default SearchBar;
