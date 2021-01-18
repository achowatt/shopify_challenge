import React from "react";

const ClearAllNominations = (props) => {
  return (
    <div className="button-container">
      <button className="button" onClick={() => props.onClear()}>
        <p>Clear All Nominations</p>
      </button>
    </div>
  );
};

export default ClearAllNominations;
