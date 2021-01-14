import React from 'react';

const NominatedCard = (props) => {
    return(
        <div className="nominated-card nominated-movie-img" style={{backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg')"}}>
            <div className="nominated-movie-description">
                <div className="nominated-stamp">
                NOMINATED
                </div>
            </div>
        </div>
    )
}

export default NominatedCard;