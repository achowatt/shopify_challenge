import React from 'react';
import NominatedCardRemove from './NominatedCardRemove';
class NominatedCard extends React.Component {
    state = {isClicked: false};

    //DON'T FORGET TO: update nomination list after remove is clicked
    handleClick = () => {
        this.setState({ isClicked: !this.state.isClicked});
    }

    render(){
        const removeNomination = <div className="dark-filter"><button className="remove-btn">Remove</button></div>;
        return(
            //if this card is clicked, => change front to false
            //show the remove button
            <div className="nominated-card nominated-movie-img"  onClick={this.handleClick} style={{backgroundImage:`url(${this.props.image})`}}>
                <div className="nominated-movie-description">
                    <div className= {`nominated-stamp`}>
                    NOMINATED
                    </div>
                </div>
                { this.state.isClicked ? <NominatedCardRemove id={this.props.id} onRemove={this.props.onRemove}/> : ''}
            </div>
        )
    }
}

export default NominatedCard;