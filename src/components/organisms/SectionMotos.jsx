import Principal from "../molecules/Principal";
import Label from "../atoms/Label";
import React, { useRef, useState } from "react";
import Formulario from "../molecules/Formulario";
import ModalEliminar from "./ModalEliminar"; // Asegúrate de importar correctamente tu componente ModalEliminar
import Swal from "sweetalert2";

function SectionMotos() {
    const modalRef = useRef(null);
    const modalRefEdit = useRef(null);
    const deleteModalRef = useRef(null);
    const [notification, setNotification] = useState("");
    const [currentPage, setCurrentPage] = useState("vehiculos"); // Definimos la página actual

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
        setCurrentPage(page); // Establecemos la página actual
        deleteModalRef.current.showModal();
    };

    const closeDeleteModal = () => {
        deleteModalRef.current.close();
    };

    const handleDelete = () => {
        closeDeleteModal();
        Swal.fire(
        "Eliminado",
        "El elemento ha sido eliminado exitosamente.",
        "success"
        );
        setNotification("Elemento eliminado exitosamente");
    };

    const handleCloseNotification = () => {
        setNotification("");
    };

    return (
            <>
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 w-full min-h-screen">
        <div className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-stone-950">
        <Label className="font-bold m-2" text="LISTO PARA TRABAJAR!" />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        <Principal onClick={openModal} image={"Moto.png"} text="Añadir." />
        <Principal image={"Moto.png"} text="Visualizar." />
        <Principal onClick={openEditModal} image={"pen-svgrepo-com(2).svg"} text="Editar." />
        <Principal onClick={() => openDeleteModal('vehiculos')} image={"trash-xmark-svgrepo-com.svg"} text="Eliminar." />
        </div>

        <dialog ref={modalRef} className="border-4 border-black bg-azulIntegradorClaro">
        <div>
            <Formulario />
            <div className="flex justify-center">
            <button className="w-1/5 m-1 font-bold text-white bg-red-600 border p-2" onClick={closeModal}>Cerrar</button>
            <button className="w-1/5 m-1 font-bold text-white bg-green-600 border p-2" onClick={closeModal}>Añadir</button>
            </div>
        </div>
        </dialog>

        <dialog ref={modalRefEdit} className="border-4 border-black bg-azulIntegradorClaro">
        <div>
            <h1 className="font-bold m-2">Editar Datos</h1>
            <Formulario />
            <div className="flex justify-center">
            <button className="w-1/5 m-1 font-bold text-white bg-red-600 border p-2" onClick={closeEditModal}>Cerrar</button>
            <button className="w-1/5 m-1 font-bold text-black bg-yellow-400 border p-2" onClick={closeEditModal}>Editar</button>
            </div>
        </div>
        </dialog>

        <dialog ref={deleteModalRef} className="border-4 border-black bg-azulIntegradorClaro w-1/3">
        <div className="flex justify-center flex-col">
            <ModalEliminar currentPage={currentPage} />
            <button className="w-1/5 m-1 font-bold text-white bg-red-600 rounded-lg p-2" onClick={handleDelete}>Eliminar</button>
            <button className="w-1/5 m-1 font-bold text-white bg-red-600 rounded-lg p-2" onClick={closeDeleteModal}>Cerrar</button>
        </div>
        </dialog>

        {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded">
            {notification}
            <button className="ml-4" onClick={handleCloseNotification}>Cerrar</button>
        </div>
        )}
    </div>
</>

    );
}

export default SectionMotos;
