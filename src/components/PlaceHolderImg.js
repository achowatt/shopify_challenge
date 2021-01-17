import React from 'react';
import ShoppiesImage2 from '../shoppies2.svg';

const PlaceHolderImg = () => {
    return (
        <div className="placeHolderImg-container">
            <img className="placeHolderImg" src={ShoppiesImage2} style={{filter:"brightness(75%)"}} alt="The Shoppies Image"/>
        </div>
    )
}

export default PlaceHolderImg;