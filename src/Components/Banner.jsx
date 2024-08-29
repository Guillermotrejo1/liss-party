import React from "react";


function Banner({ title, backgroundImage }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "550px 400px",
      }}
    >
      <h1 className="banner__title">{title}</h1>
      <figure className="attribution">
        <a className="credit" href="https://www.freepik.com/free-vector/hand-drawn-cinco-de-mayo-concept_7312051.htm#fromView=search&page=1&position=5&uuid=bf7a11ad-d56a-4c5d-b22c-645c5b00c978">
          Image by freepik
        </a>
      </figure>
    </div>
  );
}

export default Banner;

