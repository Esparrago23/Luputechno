import React, { useState } from "react";
import Button from "../atoms/Button"
function VehicleDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button onClick={toggleDropdown} className="w-full py-1 m-10 font-bold text-white rounded-lg bg-azulIntegrador">Vehiculos</Button>
      {isOpen && (
        <div className="absolute mt-2 rounded-lg shadow-lg bg-azulIntegrador">
          <ul>
            <li className="px-4 py-2 text-white">Gasolina</li>
            <li className="px-4 py-2 text-white">Diesel</li>
            <li className="px-4 py-2 text-white">Motos</li>
            <li className="px-4 py-2 text-white">Comodatos</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default VehicleDropdown;
