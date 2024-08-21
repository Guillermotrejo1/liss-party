import React from "react";

function Card({ image, text }) {
  return (
    <div className="card">
      <figure className="card__img--wrapper">
        <img className="card__img" src={image} alt="" />
      </figure>
    </div>
  );
}

export default Card;
