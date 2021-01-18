import React from "react";
import MovieResultCard from "./MovieResultCard";
import trophyV2 from "../trophy_v2.svg";

const MovieResults = ({
  onMovieSelect,
  movies,
  totalResults,
  nominationList,
  term,
  fiveNominations,
}) => {
  const movieCards = movies.map((movie) => {
    return (
      <MovieResultCard
        key={movie.imdbID}
        onMovieSelect={onMovieSelect}
        imdbID={movie.imdbID}
        title={movie.Title}
        rating="4.3"
        year={movie.Year}
        imageUrl={movie.Poster === "N/A" ? trophyV2 : movie.Poster}
        movieInfo={movie}
        nominationList={nominationList}
        fiveNominations={fiveNominations}
      />
    );
  });

  return (
    <div className="result-wrapper">
      <div className="result-text-container">
        <p>Results for "{term}"</p>
        <p>(Total {totalResults} Movies)</p>
      </div>
      <div className="movie-result-card-container">{movieCards}</div>
    </div>
  );
};

export default MovieResults;
