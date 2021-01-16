import React from 'react';
import ShoppiesImage from '../shoppies.svg'

const PlaceHolderImg = () => {
    return (
        <div className="placeHolderImg-container">
            <img className="placeHolderImg" src={ShoppiesImage} />
        </div>
    )
}

export default PlaceHolderImg;