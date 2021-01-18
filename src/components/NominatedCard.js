import React from "react";
import NominatedCardRemove from "./NominatedCardRemove";
import trophyV2 from "../assets/trophy_v2.svg";
class NominatedCard extends React.Component {
  state = {isClicked: false};

  handleClick = () => {
    this.setState({isClicked: !this.state.isClicked});
  };

  render() {
    return (
      <div
        className="nominated-card nominated-movie-img"
        onClick={this.handleClick}
        style={{
          backgroundImage: `url(${
            this.props.image === "N/A" ? trophyV2 : this.props.image
          })`,
        }}
      >
        {this.props.image === trophyV2 ? (
          <p className="nominated-title">{this.props.title}</p>
        ) : (
          ""
        )}
        <div className={`nominated-stamp`}>NOMINATED</div>
        {this.state.isClicked ? (
          <NominatedCardRemove id={this.props.id} onRemove={this.props.onRemove} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default NominatedCard;
