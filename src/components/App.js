import '../App.css';
import React from "react";
import NominatedSection from './NominatedSection';
import LoadingImage from './LoadingImage';
import MovieResultSection from './MovieResultSection';
import SearchBar from './Searchbar';
import WelcomeMessage from './WelcomeMessage';
import SeeNominations from './SeeNominations';
import axios from 'axios';
// import LoadMoreButton from './LoadMoreButton';

class App extends React.Component {

  state = {
    nominationList:[], 
    movieResults:[], 
    searchTerm:'', 
    errorMessage: '', 
    queryStatus: '', 
    loading: false, 
    page: 1,
    totalResults: 0,
    seeNominations: false
  };

  onSearchSubmit = async (term) => {
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: { apikey: 'c69b3d4a', type:"movie", s: term, i:'tt3896198', page: 1}
    })
    this.setState({ movieResults: response.data.Search, searchTerm: term, totalResults: response.data.totalResults, page: 1});
    console.log(response.data);
    // console.log(this.state.movieResults);
  }

  onLoadMore = async() =>{
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: { apikey: 'c69b3d4a', type:"movie", s: this.state.searchTerm, i:'tt3896198', page: this.state.page + 1}
    })
    this.setState({ movieResults: [...this.state.movieResults, ...response.data.Search], page: this.state.page + 1});
    console.log(response.data);
  }

  onMovieSelect = (movie) => {
    this.setState({nominationList: [...this.state.nominationList, movie ]});
    console.log(this.state.nominationList);
  }

  onRemove = (movieID) => {
    console.log(movieID);
    // const updatedList = this.state.nominationList.filter((movie) => {
    //   return movie.mdbID !== movieID;
    // })
    // console.log("is this getting called a lot??");
    // this.setState({nominationList: updatedList })
  }

  onNominationButtonClick = (clickStatus) => {
    this.setState({seeNominations: clickStatus});
  }

  render() {

    const LoadMore = () => {
      if (this.state.movieResults.length && (this.state.page * 10 < this.state.totalResults)){
        return (<div className="load-more-container">
          <button className="load-more-button" onClick={this.onLoadMore}>
          <p>Load 10 More</p>
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

              <SeeNominations onClick={this.onNominationButtonClick}/>
              {/* <SeeNominations/>  */}

            </div>
            {/* Search */} <SearchBar onSubmit={this.onSearchSubmit}/>
          </div>
         </header>

        <main>
            <section className="search-result-section">
              {/* Loader vs Search Movie Cards */}
              {this.state.loading ? <LoadingImage/> : this.state.movieResults.length ? <MovieResultSection nominationList = {this.state.nominationList } movies={this.state.movieResults} page={this.state.page} numOfMovies={this.state.movieResults.length} totalResults = {this.state.totalResults} onMovieSelect={this.onMovieSelect} term={this.state.searchTerm}/> : <WelcomeMessage/>  }
              {LoadMore()}
            </section>

              {/* const nominationList = this.props.nominationList; */}
              {/* {(!this.state.nominationList.length) ? "": <NominatedSection nominationList = {this.state.nominationList} onRemove={this.onRemove}/>} */}
              { this.state.seeNominations ? <NominatedSection nominationList = {this.state.nominationList} onRemove={this.onRemove}/> : ""}
        </main>
      </div>
    );
  }
}

export default App;
