import React from "react";
import trophy from "../assets/trophy.svg";

class SeeNominations extends React.Component {
  render() {
    return (
      <button
        type="button"
        className="see-nominations"
        onClick={() => this.props.onClick()}
      >
        <img src={trophy} alt="trophy"></img>
        <p>{this.props.seeNominations ? "Search" : "Nominations"}</p>
      </button>
    );
  }
}

export default SeeNominations;
