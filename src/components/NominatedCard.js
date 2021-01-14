import React from 'react';
class NominatedCard extends React.Component {
    state = {front: true};

    //DON'T FORGET TO: update nomination list after remove is clicked

    render(){
        const pic = "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg";
        const icon = "hello";
        const removeNomination = <div className="dark-filter"><button className="remove-btn">Remove</button></div>;
        return(
            //if this card is clicked, => change front to false
            //show the remove button
            <div className="nominated-card nominated-movie-img" style={{backgroundImage:`url(${pic})`}}>
                <div className="nominated-movie-description">
                    <div className= {`${icon} nominated-stamp`}>
                    NOMINATED
                    </div>
                </div>

                {this.state.front ? '' : removeNomination}
            </div>
        )
    }
}

export default NominatedCard;