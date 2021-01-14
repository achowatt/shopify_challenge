import React from 'react';
import MovieResultCard from './MovieResultCard';

const MovieResults = () => (
    <div className="result-wrapper">
      <div className="result-text-container">
        <p>Results for "place holder"</p>
        <p>(10 results)</p>
      </div>
      <div className="movie-result-card-container">        
        <MovieResultCard title="Tangled" rating="4.3" year="2010" imageUrl="https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg"/>
        <MovieResultCard title="Harvest" rating="3.3" year="2010" imageUrl="https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg"/>
      </div>
    </div>
);


export default MovieResults;