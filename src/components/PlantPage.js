import React, { useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({baseUrl, plants, setPlants}) {
  console.log(baseUrl)
  useEffect(() => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(json => setPlants(json)
    
    )
    console.log(plants)
  }, [])

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
