import React from "react";
import NominatedCard from './NominatedCard';

class NominatedSection extends React.Component {
    
    render(){
        //If there's no list, hide the whole nomination section
        if (this.props.nominationList.length == 0) {
            return '';
        } 

        const nominationList = this.props.nominationList;

        //const showNominationList nominationList.map(()=>{

        // });

        return (
        <section className="nomination-section">
            <h2 className="nominations">My Nominations</h2>
            <div className="nominated-card-container">
                <NominatedCard title="UP" >
                    <div style={{background:"black"}}> Remove </div>
                </NominatedCard>
            </div>
        </section>
        )
    }
}

export default NominatedSection;