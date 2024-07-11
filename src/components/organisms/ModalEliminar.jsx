import React, { useState } from "react";
import Eliminar from "../molecules/Eliminar";
import Button from "../atoms/Button";
import Swal from "sweetalert2";
import Button_icons from "../atoms/Button_icons";
import Img from "../atoms/Img";

const ModalEliminar = ({ currentPage, onCancel }) => {
  const [inputValue, setInputValue] = useState("");

  let title = "";
  let placeholder = "";
  let apiEndpoint = "";

  switch (currentPage) {
    case "resguardante":
      title = "Eliminar Resguardante";
      placeholder = "Ingrese la curp del Resguardante";
      apiEndpoint = "Resguardantes";
      break;
    case "vehiculos":
      title = "Eliminar Vehículos";
      placeholder = "Ingrese el no. Económico del Vehículo";
      apiEndpoint = "Vehiculos";
      break;
    case "mantenimiento":
      title = "Eliminar Mantenimiento";
      placeholder = "Ingrese el no. Serie";
      apiEndpoint = "Mantenimientos";
      break;
    case "usuarios":
      title = "Eliminar Usuarios";
      placeholder = "Ingrese el nombre del Usuario";
      apiEndpoint = "Usuarios";
      break;
    default:
      break;
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEliminarClick = () => {
    
    if (!inputValue) {
      return(
        Swal.fire({
          title:"Error",
          text:"Por favor ingrese un valor antes de eliminar.",
          icon:"error",
          target:document.getElementById('modalEliminar')
    })
      );
    }

    Swal.fire({
      title: "Confirmación",
      text: "¿Estás seguro de que deseas eliminar?",
      icon: "warning",
      showCancelButton: true,
      target: document.getElementById('modalEliminar'),
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_URL_API}/${apiEndpoint}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            NumeroEconomico: inputValue,
          }),
        })
          .then((response) => {
            if (response.ok) {
              Swal.fire({
                title:"Eliminado",
                text:"El elemento ha sido eliminado.",
                icon:"success"
            });
            } else {
              response
                .json()
                .then((errorData) => {
                  Swal.fire({
                    title:"Error",
                    text:`Hubo un problema al eliminar el elemento: ${
                      errorData.message || response.statusText
                    }`,
                    icon:"error",
                    target: document.getElementById('modalEliminar'),
                });
                })
                .catch(() => {
                  Swal.fire({
                    title:"Error",
                    text:"Hubo un problema al eliminar el elemento y no se pudo obtener más detalles.",
                    icon:"error",
                    target: document.getElementById('modalEliminar'),
                });
                });
            }
          })
          .catch((error) => {
            console.error("Error al eliminar:", error);
            Swal.fire({
              title:"Error",
              text:"Hubo un problema al eliminar el elemento.",
              icon:"error",
              target: document.getElementById('modalEliminar'),
          });
          });
      }
    });
  };

  return (
    <div id="modalEliminar">
      <div className="text-center text-white rounded-lg bg-azulIntegrador">
        <span>{title}</span>
      </div>
      <div className="flex items-center p-2 space-x-2">
        <div className="w-1/2 text-white rounded-lg bg-azulIntegrador p-1/2">
          <p>Buscar</p>
        </div>

        <Eliminar
          type="text"
          placeholder={placeholder}
          onInputChange={handleInputChange}
          value={inputValue}
        ></Eliminar>
      </div>

      <div className="w-full p-1 font-bold text-center text-white bg-red-600 rounded-lg">
        <Button onClick={handleEliminarClick} title="Eliminar" />
      </div>
      <div className="absolute top-0 right-0 w-12">
        <Button_icons onClick={onCancel}>
          <Img image="/Cancelar.png" alt="Logo" />
        </Button_icons>
      </div>
    </div>
  );
};

export default ModalEliminar;