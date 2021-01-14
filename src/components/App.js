import '../App.css';
import React from "react";
import NominatedSection from './NominatedSection';
import LoadingImage from './LoadingImage'
import MovieResultSection from './MovieResultSection';
import SearchBar from './Searchbar';
import axios from 'axios';
import search from '../search.svg';

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

  state = {nominationList:[0], searchQuery: '', movieResults:[], errorMessage: '', queryStatus: '', loading: true };

  async onSearchSubmit(term) {
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: { 
        apikey: 'c69b3d4a', 
        s: term, 
        i:'tt3896198'
      }
    })
    
    console.log(response.data);
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    //put search query here -- helps when state changes data loading
  }

  render() {
    //Render based on loading state....

    return (
      <div className="App">
        <HeaderSection>
          <h1>The Shoppies</h1>
          <p className="header-description">Movie Awards for Entrepreneurs</p>
        </HeaderSection>

        <main>
            <section className="search-result-section">
              {/* Search */} <SearchBar onSubmit={this.onSearchSubmit}/>

              {/* Loader vs Search Movie Cards */}
              {/* {this.state.loading ? <LoadingImage/> : <MovieResultSection/>} */}
            </section>

            {/* Nominated Movie Section */}
            <NominatedSection nominationList = {this.state.nominationList}/>
        </main>
      </div>
    );
  }
}

export default App;
