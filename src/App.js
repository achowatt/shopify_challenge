import './App.css';
import stars4 from './stars/4-stars.svg';
import stars3 from './stars/3-stars.svg';
import stars2 from './stars/2-stars.svg';
import stars1 from './stars/1-stars.svg';
import search from './search.svg';

function App() {
  return (
    <div className="App">
      <header>
          <div className="header-container">
            <h1>The Shoppies</h1>
            <p className="header-description">Movie Awards for Entrepreneurs</p>
          </div>
      </header>
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

            {/* Search Results */}

           {/* Search Movie Cards */}
           <div className="movie-result-card-container">

              <div className="movie-result-card nominated">
                <div className="movie-img" style={{backgroundImage:`url("https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg")`}}></div>
                <div className="movie-description">
                  <h3 className="movie-title">Tangled (2010)</h3>
                  <div className="movie-rating">
                    <p>Average Rating:</p>
                    <img className="stars" src={stars4} alt="4-stars-rating"/>
                  </div>
                  <button className="nominate-button">nominate</button>
                </div>
              </div>

              <div className="movie-result-card">
                <div className="movie-img" style={{backgroundImage:`url("https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg")`}}></div>
                <div className="movie-description">
                  <h3 className="movie-title">Tangled (2010)</h3>
                  <div className="movie-rating">
                    <p>Average Rating:</p>
                    <img className="stars" src={stars3} alt="4-stars-rating"/>
                  </div>
                  <button className="nominate-button">nominate</button>
                </div>
              </div>

              <div className="movie-result-card">
                <div className="movie-img" style={{backgroundImage:`url("https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg")`}}></div>
                <div className="movie-description">
                  <h3 className="movie-title">Tangled (2010)</h3>
                  <div className="movie-rating">
                    <p>Average Rating:</p>
                    <img className="stars" src={stars2} alt="4-stars-rating"/>
                  </div>
                  <button className="nominate-button">nominate</button>
                </div>
              </div>

           </div>

          </section>

          {/* Nominated Movie Section */}
          <section className="nomination-section">
            <h2 className="nominations">Nominations</h2>
            <div className="nominated-card-container">
              <div className="nominated-card nominated-movie-img" style={{backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg')"}}>
                  <div className="nominated-movie-description">
                      <div className="nominated-stamp">
                      NOMINATED
                    </div>
                  </div>
                </div>
            </div>
          </section>
      </main>
    </div>
  );
}

export default App;
