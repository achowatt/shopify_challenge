import React from "react";
import NominatedCard from './NominatedCard';
import PlaceHolderImg from './PlaceHolderImg';

class NominatedSection extends React.Component {
    render(){

        const showNominationList = this.props.nominationList.map((movie)=>{
            return(
                <NominatedCard key={movie.imdbID} title={movie.Title} image={movie.Poster} id={movie.imdbID} onRemove={this.props.onRemove}>
                <div style={{background:"black"}}> Remove </div>
                </NominatedCard>
            );
        });

        return (
        <section className="nomination-section">
            <h2 className="nominations">
                {!this.props.nominationList.length ? "Uh oh! You have not nominated a movie..." : "My Nominations"}
            </h2>
            {!this.props.nominationList.length ? <PlaceHolderImg/> : " "}
            <div className="nominated-card-container">
                {showNominationList}
            </div>
        </section>
        )
    }
}

export default NominatedSection;