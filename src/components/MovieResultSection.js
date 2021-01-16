import React from 'react';
import MovieResultCard from './MovieResultCard';


const MovieResults = ({onMovieSelect, movies,totalResults,page, numOfMovies, nominationList, term}) => {
  const movieCards = movies.map((movie)=>{
    return (
      <MovieResultCard 
        onMovieSelect={onMovieSelect} 
        imdbID={movie.imdbID} 
        title={movie.Title} 
        rating="4.3" 
        year={movie.Year} 
        imageUrl={movie.Poster}
        movieInfo={movie}
        nominationList={nominationList}
      />
    );
  })

  return (
    <div className="result-wrapper">
      <div className="result-text-container">
        <p>Results for "{term}"</p>
        <p>page {page} of {Math.ceil(totalResults/10)}</p>
      </div>
      <div className="movie-result-card-container">        
        {movieCards}
      </div>
    </div>
  );
}


export default MovieResults;