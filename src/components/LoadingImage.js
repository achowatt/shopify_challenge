import React from 'react';

const LoadingImage = (props) => {
    return (
        <div className="loading-container">
            <div className="loading-image">
            </div>
            <p>{props.message}</p>
        </div>
    )
}

LoadingImage.defaultProps = {
    message: 'Loading Movies'
}
export default LoadingImage;