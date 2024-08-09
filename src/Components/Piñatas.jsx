import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function Piñatas() {
  return (
    <section id="Pinatas">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Piñatas</div>
        </div>
        <div className="card__container">
          <Card
            imageUrl="https://lh3.googleusercontent.com/pw/AP1GczNym9O8HuEqWFFBwbUFIyOO86rUwglibQBfkLNeXLOH8mEPjzDJU56GfBwRUTdoDIXExp_w5TzSquNGqgF27XLK0g9cPkTCqY1cva8A28gBOkOAfaE0WTu4xi9jGKFQwHkjKijbTl1--uaDuCbaefdi2g=w776-h1033-s-no-gm?authuser=0"
            text="card1"
          />
          <Link to="/Pinatas">
            <button className="link__btn">See More</button>
          </Link>
          <Card
            imageUrl="https://lh3.googleusercontent.com/pw/AP1GczN3qfsKblVm7PSJ-3LE4gr2RQ1ijRYPGHvLNjJUf_ERh0dhEcD2NlTuz29WF6LJghocB4TzU1thng15cpBv-k3BZsCKJEs7OJElvWsDLiOi6pKwrfY08OyvDbxY6QkGrPEpcTRbweT_ZZ4CziE9h_65zw=w776-h1033-s-no-gm?authuser=0"
            text="card2"
          />
        </div>
      </div>
    </section>
  );
}

export default Piñatas;
