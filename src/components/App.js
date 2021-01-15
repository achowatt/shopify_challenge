import '../App.css';
import React from "react";
import NominatedSection from './NominatedSection';
import LoadingImage from './LoadingImage'
import ShoppiesImage from '../shoppies.svg'
import MovieResultSection from './MovieResultSection';
import SearchBar from './Searchbar';
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

const placeHolderImage = () => {
  return (
    <img className="placeHolderImg" src={ShoppiesImage} />
  )
}
class App extends React.Component {

  state = {nominationList:[], movieResults:[], searchTerm:'', errorMessage: '', queryStatus: '', loading: false };

  onSearchSubmit = async (term) => {

    try {
      const response = await axios.get(`http://www.omdbapi.com/`, {
        params: { apikey: 'c69b3d4a', s: term, i:'tt3896198' }
      })
      this.setState({ movieResults: response.data.Search, searchTerm: term});
    } catch (err) {

    }
    console.log(this.state.movieResults);
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
    return (
      <div className="App">
        <HeaderSection>
          <h1>The Shoppies</h1>
          <p className="header-description">Movie Awards for Entrepreneurs</p>
        </HeaderSection>

        <main>
            <section className="search-result-section">
              {/* Search */} <SearchBar onSubmit={this.onSearchSubmit}/>
              
              {(this.state.searchTerm == '') ? placeHolderImage() : ''}

              {/* Loader vs Search Movie Cards */}
              {this.state.loading ? <LoadingImage/> : <MovieResultSection nominationList = {this.state.nominationList } movies={this.state.movieResults} numOfMovies={this.state.movieResults.length} onMovieSelect={this.onMovieSelect}/>}
            </section>

              {/* const nominationList = this.props.nominationList; */}
              {(!this.state.nominationList.length) ? "" : <NominatedSection nominationList = {this.state.nominationList} onRemove={this.onRemove}/>}
        </main>
      </div>
    );
  }
}

export default App;
