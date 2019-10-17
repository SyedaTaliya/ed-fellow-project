import React from "react";

function ProcessCard(props) {
  return (
    <div className="process-card">
      <p>{props.number}</p>
      <p>{props.heading}</p>
      <p>{props.para}</p>
    </div>
  );
}

export default ProcessCard;
