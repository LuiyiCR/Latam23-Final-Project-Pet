import React, { useContext } from "react";
import { Context } from "../store/appContext";

const TestButton = () => {
  const { actions } = useContext(Context);

  const simulateAddPet = () => {
    const simulatedPetData = {
      nombre: "Simba",
      fecha_de_nacimiento: "2022-01-01",
      foto: "https://images.pexels.com/photos/17407385/pexels-photo-17407385/free-photo-of-cute-pomeranian-puppy.jpeg?auto=compress&cs=tinysrgb&w=600"
    };

    actions.addPet(simulatedPetData);
  };

  return (
    <button onClick={simulateAddPet}>Simular Agregar Mascota</button>
  );
};

export default TestButton;
