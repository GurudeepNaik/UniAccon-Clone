import React from "react";

const Card = (props) => {
  const { heading, img } = props.data;
  return (
    <div className="card" style={{ backgroundImage: `url(${img})` }}>
      <p className="collection">Collection</p>
      <h2 className="heading">{heading}</h2>
      <button className="btn">Show All</button>
    </div>
  );
};

export default Card;
