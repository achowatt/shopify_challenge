import React from 'react';
import axios from 'axios';

class LoadMoreButton extends React.Component {
    render(){
        return (
            <div className="load-more-container">
                <button className="load-more-button" onClick={this.onLoadMore}>
                <p>Load 10 More</p>
                </button>
            </div>
        )
    }
}

export default LoadMoreButton;


