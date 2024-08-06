import React from "react";

function Card({imageUrl, text}) {
  return (
    <div className="card__row">
      <div className="card__wrapper">
        <div className="card">
          <p className="card__text">{text}</p>
          <figure className="card__img--wrapper">
            <img className="card__img" src={imageUrl} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Card;
