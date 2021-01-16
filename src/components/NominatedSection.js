import React from "react";
import NominatedCard from './NominatedCard';

class NominatedSection extends React.Component {
    render(){

        const showNominationList = this.props.nominationList.map((movie)=>{
            return(
                <NominatedCard title={movie.Title} image={movie.Poster} id={movie.imdbID} onRemove={this.props.onRemove}>
                <div style={{background:"black"}}> Remove </div>
                </NominatedCard>
            );
        });

        return (
        <section className="nomination-section">
            <h2 className="nominations">
                My Nominations
            </h2>
            <div className="nominated-card-container">
                {/* <NominatedCard title="UP" >
                    <div style={{background:"black"}}> Remove </div>
                </NominatedCard> */}
                {showNominationList}
            </div>
        </section>
        )
    }
}

export default NominatedSection;