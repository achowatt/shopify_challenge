import React from "react";
import ShoppiesImage2 from "../assets/shoppies2.svg";

const PlaceHolderImg = () => {
  return (
    <div className="placeHolderImg-container">
      <img
        className="placeHolderImg"
        src={ShoppiesImage2}
        style={{filter: "brightness(75%)"}}
        alt="The Shoppies"
      />
    </div>
  );
};

export default PlaceHolderImg;
