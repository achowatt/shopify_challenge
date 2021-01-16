import '../App.css';
import React from "react";
import NominatedSection from './NominatedSection';
import LoadMoreButton from './LoadMoreButton';
import LoadingImage from './LoadingImage';
import PlaceHolderImg from './PlaceHolderImg';
import MovieResultSection from './MovieResultSection';
import SearchBar from './Searchbar';
import WelcomeMessage from './WelcomeMessage';
import axios from 'axios';

const HeaderSection = (props) => {
  return(
    <header>
      <div className="header-container">
        {props.children}
      </div>
    </header>
  )
}
class App extends React.Component {

  state = {
    nominationList:[], 
    movieResults:[], 
    searchTerm:'', 
    errorMessage: '', 
    queryStatus: '', 
    loading: false, 
    page: 1,
    totalResults: 0
  };

  onSearchSubmit = async (term) => {
    //reset back to page 1
    this.setState({ page: 1})

    try {
      const response = await axios.get(`http://www.omdbapi.com/`, {
        params: { apikey: 'c69b3d4a', s: term, i:'tt3896198', page: this.state.page }
      })
      this.setState({ movieResults: response.data.Search, searchTerm: term, totalResults: response.data.totalResults, });
      console.log(response.data);
    } catch (err) {

    }
    // console.log(this.state.movieResults);
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

  render() {

    const showLoadMoreButton = () => {
      if(this.state.movieResults.length) {
        return (this.state.totalResults > (this.state.page * this.state.movieResults.length))? <LoadMoreButton/> : "";
      }
    }

    return (
      <div className="App">
        <HeaderSection>
          <h1>The Shoppies</h1>
          <p className="header-description">Movie Awards for Entrepreneurs</p>
        </HeaderSection>

        <main>
            <section className="search-result-section">
              {/* Search */} <SearchBar onSubmit={this.onSearchSubmit}/>
              
              {/* {(this.state.searchTerm == '') ? <PlaceHolderImg/> : ''} */}

              {/* Loader vs Search Movie Cards */}
              {this.state.loading ? <LoadingImage/> : this.state.movieResults.length ? <MovieResultSection nominationList = {this.state.nominationList } movies={this.state.movieResults} numOfMovies={this.state.movieResults.length} onMovieSelect={this.onMovieSelect}/> : <PlaceHolderImg/> }
              {showLoadMoreButton()}
            </section>

              {/* const nominationList = this.props.nominationList; */}
              {(!this.state.nominationList.length) ? <WelcomeMessage/> : <NominatedSection nominationList = {this.state.nominationList} onRemove={this.onRemove}/>}
        </main>
      </div>
    );
  }
}

export default App;
