import React from 'react';

import stars4 from './stars/4-stars.svg';
import stars3 from './stars/3-stars.svg';
import stars2 from './stars/2-stars.svg';
import stars1 from './stars/1-stars.svg';

const image = `url("https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg")`;

const MovieResultCard = (props) => {
    
    //figure out how to do stars later
    const rating = Math.round(props.rating);
    console.log(rating);

    return (
        <div className="movie-result-card">
            <div className="movie-img" style={{backgroundImage:`url(${props.imageUrl})`}}></div>
            <div className="movie-description">
            <h3 className="movie-title">{props.title} ({props.year})</h3>
            <div className="movie-rating">
                <p>Average Rating:</p>
                <img className="stars" src={stars4} alt="4-stars-rating"/>
            </div>
            <button className="nominate-button">nominate</button>
            </div>
        </div>
    );
}

export default MovieResultCard; 