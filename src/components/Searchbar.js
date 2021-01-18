import React from "react";

class SearchBar extends React.Component {
  state = {searchQuery: ""};

  onSearchSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchQuery !== "") {
      this.props.onSubmit(this.state.searchQuery);
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSearchSubmit}>
          <input
            className="search-input"
            value={this.state.searchQuery}
            type="search"
            onChange={(e) => this.setState({searchQuery: e.target.value})}
            placeholder="Search Your Favourite Movie"
          />
        </form>
      </>
    );
  }
}

export default SearchBar;
