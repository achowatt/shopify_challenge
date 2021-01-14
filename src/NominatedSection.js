import React from "react";
import NominatedCard from './NominatedCard';

class NominatedSection extends React.Component {
    state = {nominationList:[]};
    render(){
        return (
        <section className="nomination-section">
            <h2 className="nominations">My Nominations</h2>
            <div className="nominated-card-container">
                <NominatedCard>
                    <div style={{background:"black"}}> Remove </div>
                </NominatedCard>
            </div>
        </section>
        )
    }
}

export default NominatedSection;