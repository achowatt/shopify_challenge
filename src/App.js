import './App.css';
import React from "react";
import MovieResultCard from './MovieResultCard';
import NominatedSection from './NominatedSection';
import search from './search.svg';

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

  state = {nominationList:[], searchQuery: '', errorMessage: '', queryStatus: '', loading: false };

  render() {
    return (
      <div className="App">
        <HeaderSection>
          <h1>The Shoppies</h1>
          <p className="header-description">Movie Awards for Entrepreneurs</p>
        </HeaderSection>

        <main>
            <section className="search-result-section">
            {/* Search */}
              <form>
                <input className="search-input" type="search" placeholder="Search Your Favourite Movie"></input>
              </form>

            {/* Search Text */}
              <div className="result-text-container">
                <p>Results for "place holder"</p>
                <p>(10 results)</p>
              </div>

              {/******** Search Results ********/}

            {/* Search Movie Cards */}
            <div className="movie-result-card-container">
              
              <MovieResultCard title="Tangled" rating="4.3" year="2010" imageUrl="https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg"/>
              <MovieResultCard title="Harvest" rating="3.3" year="2010" imageUrl="https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg"/>
            
            </div>

            {/******** End of Search Results ********/}

            </section>

            {/******* Nominated Movie Section *******/}
            <NominatedSection/>
            {/* <NominationSection>
              <h2 className="nominations">Nominations</h2>
              <div className="nominated-card-container">

                <NominatedCard>
                  <div style={{background:"black"}}> Remove </div>
                </NominatedCard>

              </div>
            </NominationSection> */}
            {/******* End of Nominated Movie Section *******/}
        </main>
      </div>
    );
  }
}

export default App;
