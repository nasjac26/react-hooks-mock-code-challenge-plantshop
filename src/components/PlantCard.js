import React from "react";

function PlantCard(props) {
  console.log("this is on card level", props)

  return (
    
    <li className="card">
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <p>Price: {props.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
