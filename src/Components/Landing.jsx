import React from "react";

function Landing() {
  return (
    <section id="Landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="header__title">J.E.M. Creations</h1>
            <h2 className="header__quote">You think it i create it</h2>
          </div>
          <div className="diamond__wrapper">
            <div className="diamond__ruby"></div>
            <div className="diamond"></div>
            <div className="diamond__amethyst"></div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
