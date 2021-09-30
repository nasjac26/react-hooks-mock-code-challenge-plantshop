import React, { useState } from "react";
import Header from "./Header";
import PlantList from "./PlantList";
import PlantPage from "./PlantPage";


// I can add a new plant to the page by submitting the form.
//POST


// I can mark a plant as "sold out".
//PATCH


// I can search for plants by their name and see a filtered list of plants.






const BASE_URL = "http://localhost:6001/plants"


function App() {
  const [plants, setPlants] = useState("");

  return (
    <div className="app">
      <Header />
      <PlantPage baseUrl={BASE_URL} plants={plants} setPlants={setPlants} />
    </div>
  );
}

export default App;
