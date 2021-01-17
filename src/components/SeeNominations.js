import React from 'react';
import trophy from '../trophy.svg';

class SeeNominations extends React.Component {

    state = {nominationListOpen: false}

    onNominationButtonClick = () => {
        this.setState({nominationListOpen: !this.state.nominationListOpen});
        this.props.onClick(this.state.nominationListOpen);
    };

    render() {
        return (
            <button type="button" className="see-nominations" onClick={this.onNominationButtonClick}>
                <img src={trophy} alt="trophy"></img>
                {this.state.nominationListOpen ? <p>See Nominations</p> : <p>Back to Movies</p>}
            </button>
        )
    }
}

export default SeeNominations;


