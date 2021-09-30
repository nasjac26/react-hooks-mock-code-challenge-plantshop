import React, {useState} from "react";
import PlantList from "./PlantList";

function NewPlantForm({ setPlants, plants }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,

    });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body:JSON.stringify({
        "name": formData.name,
        "image": formData.img,
        "price": formData.price

      })
    })
    .then(response => response.json())
    .then(justAddedPlant => setPlants([...plants, justAddedPlant]))
  }

  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
