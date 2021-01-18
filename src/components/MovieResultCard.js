import React from "react";
import trophyV2 from "../trophy_v2.svg";
class MovieResultCard extends React.Component {
  render() {
    const nominated = this.props.nominationList.find(
      (movie) => movie.imdbID === this.props.imdbID
    );

    return (
      <div
        className="movie-result-card"
        style={nominated ? {filter: "brightness(26%)"} : {filter: "none"}}
      >
        <div
          className={
            this.props.imageUrl === trophyV2 ? "movie-img-unavailable" : "movie-img"
          }
          style={{backgroundImage: `url(${this.props.imageUrl})`}}
        ></div>
        <div className="movie-description">
          <h3 className="movie-title">
            {this.props.title} ({this.props.year})
          </h3>
          <button
            type="button"
            className="nominate-button"
            disabled={nominated}
            style={
              nominated || this.props.fiveNominations
                ? {background: "grey", pointerEvents: "none"}
                : {background: "rgb(123, 0, 0)"}
            }
            onClick={() => this.props.onMovieSelect(this.props.movieInfo)}
          >
            {nominated ? "nominated" : "nominate"}
          </button>
        </div>
      </div>
    );
  }
}

export default MovieResultCard;
