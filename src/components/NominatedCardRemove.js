import React from 'react';
class NominatedCardRemove extends React.Component {

    render(){
        return(
            <div className="dark-filter">
                <button type="button" className="remove-btn" onClick={() => this.props.onRemove(this.props.id)}>
                    Remove
                </button>
            </div>
        )
    }
}

export default NominatedCardRemove;