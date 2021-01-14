import React from 'react';


class SearchBar extends React.Component {

    state = { searchQuery:''};

    onSearchSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSearchSubmit} >
                    <input 
                        className="search-input" 
                        value={this.state.searchQuery} 
                        type="search" onChange={(e) => this.setState({ searchQuery: e.target.value.toUpperCase()})}
                        placeholder="Search Your Favourite Movie"
                    />
                </form>
                <div>{this.state.searchQuery}</div>
            </>
        )
    }
}

export default SearchBar;