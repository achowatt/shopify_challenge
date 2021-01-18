import React from "react";
import NominatedCard from "./NominatedCard";
import PlaceHolderImg from "./PlaceHolderImg";
import trophyV2 from "../trophy_v2.svg";
import ClearAllNominations from "./ClearAllNominations";
import Balloons from "./Balloons";

class NominatedSection extends React.Component {
  render() {
    const showNominationList = this.props.nominationList.map((movie) => {
      return (
        <NominatedCard
          key={movie.imdbID}
          title={movie.Title}
          image={movie.Poster === "N/A" ? trophyV2 : movie.Poster}
          id={movie.imdbID}
          onRemove={this.props.onRemove}
        >
          <div style={{background: "black"}}> Remove </div>
        </NominatedCard>
      );
    });

    return (
      <section className="nomination-section">
        <h2 className="nominations">
          {!this.props.nominationList.length
            ? "Uh oh! You have not nominated a movie..."
            : this.props.fiveNominations
            ? "Thank you for nominating 5 movies!"
            : "My Nominations"}
        </h2>
        {!this.props.nominationList.length ? <PlaceHolderImg /> : " "}
        <div className="nominated-card-container">{showNominationList}</div>
        {this.props.nominationList.length && this.props.fiveNominations ? (
          <ClearAllNominations onClear={this.props.onClear} />
        ) : (
          ""
        )}
        {this.props.nominationList.length && this.props.fiveNominations ? (
          <>
            <Balloons speed1="15s" speed2="10s" /> <Balloons speed1="18s" speed2="12s" />
          </>
        ) : (
          ""
        )}
      </section>
    );
  }
}

export default NominatedSection;
