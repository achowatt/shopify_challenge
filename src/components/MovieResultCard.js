import React from 'react';
class MovieResultCard extends React.Component {
    render() {

        const nominated = this.props.nominationList.find((movie)=>{
            if (movie.imdbID == this.props.imdbID){
                return true;
            } 
        });

        return (
            <div className="movie-result-card"
                style={nominated? {filter: "brightness(26%)"} : {filter: "none"}}
            >
                <div className="movie-img" style={{backgroundImage:`url(${this.props.imageUrl})`}}></div>
                {/* <img className="movie-img" src={this.props.imageUrl}/> */}
                <div className="movie-description">
                <h3 className="movie-title">{this.props.title} ({this.props.year})</h3>
                <button 
                    type="button" 
                    className="nominate-button" 
                    disabled={nominated}
                    style = {nominated ? {background:"grey", pointerEvents: "none"} : {background:"#BE0606"}}
                    onClick = {() => this.props.onMovieSelect(this.props.movieInfo)}>
                    {nominated ? "nominated" : "nominate"}
                </button>
                </div>
            </div> 
        )
    }
}


export default MovieResultCard; 