import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  console.log("this is the plants before factory", plants)

  const renderPlantCardFactory = () => {
    if(!!plants) {
      return plants.map(plant => (
       <PlantCard key={plant.id} name={plant.name} 
       image={plant.image} price={plant.price}/>
    ))
  }
  }
  return (
    <ul className="cards">{renderPlantCardFactory()}</ul>
  );
}

export default PlantList;
