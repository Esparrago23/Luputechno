import React, { useRef, useState } from "react";
import Principal from "../molecules/Principal";
import Label from "../atoms/Label";
import Formulario from "../molecules/Formulario";
import ModalEliminar from "./ModalEliminar";
import Button_icons from "../atoms/Button_icons";
import Img from "../atoms/Img";

function SectionMotos() {
  const modalRef = useRef(null);
  const modalRefEdit = useRef(null);
  const deleteModalRef = useRef(null);
  const [currentPage, setCurrentPage] = useState("vehiculos");

  const openModal = () => {
    modalRef.current.showModal();
  };

  const openEditModal = () => {
    modalRefEdit.current.showModal();
  };

  const closeEditModal = () => {
    modalRefEdit.current.close();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  const openDeleteModal = (page) => {
    setCurrentPage(page);
    deleteModalRef.current.showModal();
  };

  const closeDeleteModal = () => {
    deleteModalRef.current.close();
  };

  const seeVehiculos = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_URL_API}/Vehiculos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="mb-4 text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
          <Label className="m-2 font-bold" text="LISTO PARA TRABAJAR!" />
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Principal onClick={openModal} image={"Moto.png"} text="Añadir." />
          <Principal
            image={"Moto.png"}
            text="Visualizar."
            onClick={seeVehiculos}
          />
          <Principal
            onClick={openEditModal}
            image={"pen-svgrepo-com(2).svg"}
            text="Editar."
          />
          <Principal
            onClick={() => openDeleteModal("vehiculos")}
            image={"trash-xmark-svgrepo-com.svg"}
            text="Eliminar."
          />
        </div>

        <dialog
          ref={modalRef}
          className="border-4 border-black bg-azulIntegradorClaro"
        >
          <div>
            <Formulario />
            <div className="absolute top-0 right-0 w-12">
                <Button_icons onClick={closeModal}>
                  <Img image="/Cancelar.png" alt="Logo" />
                </Button_icons>
              </div>
            <div className="flex justify-center">
              
              <button
                className="w-1/5 p-2 m-1 font-bold text-white bg-green-600 border"
                onClick={closeModal}
              >
                Añadir
              </button>
            </div>
          </div>
        </dialog>

        <dialog
          ref={modalRefEdit}
          className="border-4 border-black bg-azulIntegradorClaro"
        >
          <div>
            <h1 className="m-2 font-bold">Editar Datos</h1>
            <Formulario />
              <div className="absolute top-0 right-0 w-12">
                <Button_icons onClick={closeEditModal}>
                  <Img image="/Cancelar.png" alt="Logo" />
                </Button_icons>
              </div>
              <div className="flex justify-center">
              <button
                className="w-1/5 p-2 m-1 font-bold text-white bg-green-500 "
                onClick={closeEditModal}
              >
                Guardar
              </button>
            </div>
          </div>
        </dialog>

        <dialog
          ref={deleteModalRef}
          className="w-full max-w-md p-4 border-4 border-black bg-azulIntegradorClaro sm:w-1/2 sm:max-w-lg"
        >
          <div className="flex flex-col items-center">
            <ModalEliminar
              currentPage={currentPage}
              onCancel={closeDeleteModal}
            />
          </div>
        </dialog>
      </div>
    </>
  );
}

export default SectionMotos;
