import React, { useContext } from "react";
import { Context } from "../store/appContext";

const TestButton = () => {
  const { actions } = useContext(Context);

  const simulateAddPet = () => {
    // Datos simulados que podrías obtener del formulario
    const simulatedPetData = {
      nombre: "Simba",
      fecha_de_nacimiento: "2022-01-01",
      // ... otros campos
    };

    // Llamada a la función addPet con datos simulados
    actions.addPet(simulatedPetData);
  };

  return (
    <button onClick={simulateAddPet}>Simular Agregar Mascota</button>
  );
};

export default TestButton;
