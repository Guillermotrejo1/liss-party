import React from "react";
import Card from "./Card";

function Piñatas() {
  return (
    <section id="Piñatas">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Piñatas</div>
        </div>
        <div className="card__container">
          <Card imageUrl="https://i.etsystatic.com/30005430/r/il/41662e/3817090617/il_570xN.3817090617_rxkk.jpg" text="card1"/>
          <Card imageUrl="https://png.pngtree.com/png-clipart/20210226/ourmid/pngtree-polygonal-pinata-clip-art-png-image_2960759.png" text="card2"/>
          <Card imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHAxasHh-xq5iusMtr0SXduCb5jQLc6hT_k3Yx1aor9dTKkpOL20zJrgBgC4LINJ2COQ&usqp=CAU" text="card3"/>
          <Card imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFOLYpLO71NaphVsCG9t_LzdChpDPuW0JCsDw3q11ue__-j6lvJpwxVuBKUInZrLhorQ&usqp=CAU" text="card4"/>
        </div>
      </div>
    </section>
  );
}

export default Piñatas;
