import React from "react";

function ImgCard(props) {
  return (
    <div className="imgCard">
      <img src={props.imgUrl} />
      <h4>{props.heading}</h4>
      <p>{props.para}</p>
    </div>
  );
}

export default ImgCard;
