import React from 'react';

import stars4, { ReactComponent } from '../stars/4-stars.svg';
import stars3 from '../stars/3-stars.svg';
import stars2 from '../stars/2-stars.svg';
import stars1 from '../stars/1-stars.svg';

const image = `url("https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg")`;
const rating = (a,b,c) => {
    Math.round((a + b + c) / 3);
}

// const MovieResultCard = ({key, imageUrl, title, year, onMovieSelect, movieInfo}) => {
//     const [nominate, setNominate] = useState(false);

//     return (
//         <div className="movie-result-card" id={key}>
//             <div className="movie-img" style={{backgroundImage:`url(${imageUrl})`}}></div>
//             <div className="movie-description">
//             <h3 className="movie-title">{title} ({year})</h3>
//             <div className="movie-rating">
//                 <p>Average Rating:</p>
//                 <img className="stars" src={stars4} alt="4-stars-rating"/>
//             </div>
//             <button 
//                 type="button" 
//                 className="nominate-button" 
//                 // onClick = {() => onMovieSelect(movieInfo) }>
//                 onClick = {() => onMovieSelect(movieInfo)}>
//                 nominate
//             </button>
//             </div>
//         </div> 
//     );
// }


class MovieResultCard extends React.Component {
    render() {

        const nominated = this.props.nominationList.find((movie)=>{
            if (movie.imdbID == this.props.imdbID){
                return true;
            } 
        });

        return (
            <div className="movie-result-card" id={this.props.key} 
                style={nominated? {filter: "brightness(26%)"} : {filter: "none"}}
            >
                <div className="movie-img" style={{backgroundImage:`url(${this.props.imageUrl})`}}></div>
                <div className="movie-description">
                <h3 className="movie-title">{this.props.title} ({this.props.year})</h3>
                <div className="movie-rating">
                    <p>Average Rating:</p>
                    <img className="stars" src={stars4} alt="4-stars-rating"/>
                </div>
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