import React from "react";

function Card({ image, text }) {
  return (
    <div className="card">
      <figure className="card__img--wrapper">
        <img className="card__img" src={image} loading="lazy" decoding="async" alt="" />
      </figure>
    </div>
  );
}

export default Card;
