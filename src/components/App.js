import '../App.css';
import React from "react";
import NominatedSection from './NominatedSection';
import MovieResultSection from './MovieResultSection';
import SearchBar from './Searchbar';
import WelcomeMessage from './WelcomeMessage';
import SeeNominations from './SeeNominations';
import LoadingImage from './LoadingImage';
import axios from 'axios';

class App extends React.Component {

  state = {
    nominationList:[], 
    movieResults:[], 
    searchTerm:'', 
    errorMessage: '', 
    queryStatus: '', 
    page: 1,
    totalResults: 0,
    seeNominations: false,
    fiveNominations: false,
  };

  reachedFiveNominations = () => {
    return this.setState({
      fiveNominations: true, seeNominations: true
    })
  }

  onSearchSubmit = async (term) => {
    const response = await axios.get(`https://www.omdbapi.com/`, {
      params: { apikey: 'c69b3d4a', type:"movie", s: term, i:'tt3896198', page: 1}
    })
    if (response.data.Response === "True") {
      this.setState({ movieResults: response.data.Search, searchTerm: term, totalResults: response.data.totalResults, page: 1, errorMessage:''});
    } else {
      this.setState({errorMessage: 'No results found! Please type valid characters with minimum of 3 letters.'})
    }
  }


  onLoadMore = async() =>{
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: { apikey: 'c69b3d4a', type:"movie", s: this.state.searchTerm, i:'tt3896198', page: this.state.page + 1}
    })
    this.setState({ movieResults: [...this.state.movieResults, ...response.data.Search], page: this.state.page + 1});
    console.log(response.data);
  }

  onMovieSelect = (movie) => {
    if (this.state.nominationList.length === 4) {
      this.setState({seeNominations: true, fiveNominations: true, nominationList: [...this.state.nominationList, movie] })
    } else {
      this.setState({nominationList: [...this.state.nominationList, movie] })
    }
  }

  onRemove = (movieID) => {
    const updatedList = this.state.nominationList.filter((movie) => {
      return movie.imdbID !== movieID;
    });
    this.setState({nominationList: updatedList, fiveNominations: false });
  }

  onNominationButtonClick = (clickStatus) => {
    this.setState({seeNominations: clickStatus});
  }

  onClear = () => {
    this.setState({nominationList:[], fiveNominations: false })
  }

  render() {

    const LoadMore = () => {
      if (this.state.movieResults.length && (this.state.page * 10 < this.state.totalResults) && this.state.errorMessage === ''){
        return (<div className="button-container">
          <button className="button" onClick={this.onLoadMore}>
          <p>Load More Movies</p>
          </button>
        </div>)
      }
    }

    return (
      <div className="App">
        <header>
          <div className="header-container">
            <div className="wrapper">
              <div className="header-text">
                <h1>The Shoppies</h1>
                <p className="header-description">Movie Awards for Entrepreneurs</p>
              </div>
              <SeeNominations onClick={this.onNominationButtonClick}/> {/* My Nominations Button */}
            </div>
            <SearchBar onSubmit={this.onSearchSubmit}/> {/* Search */} 
          </div>
         </header>

        <main className={this.state.seeNominations ? "stop-scroll" : "auto-scroll"}>
            <section className="search-result-section">
              {/* Loader vs Search Movie Cards */}
              {this.state.errorMessage !== '' ? <p className="error-msg">{this.state.errorMessage}</p> : ""}
              {this.state.errorMessage !== '' ? <LoadingImage/> : this.state.movieResults.length ? <MovieResultSection fiveNominations = {this.state.fiveNominations} nominationList = {this.state.nominationList } movies={this.state.movieResults} totalResults = {this.state.totalResults} onMovieSelect={this.onMovieSelect} term={this.state.searchTerm}/> : <WelcomeMessage/>  }
              {LoadMore()}
            </section>

              { this.state.seeNominations ? <NominatedSection nominationList = {this.state.nominationList} fiveNominations = {this.state.fiveNominations} onRemove={this.onRemove} onClear={this.onClear}/> : ""}
        </main>
      </div>
    );
  }
}

export default App;
