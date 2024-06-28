import Principal from "../molecules/Principal";
import Label from "../atoms/Label";
import React, { useRef, useState } from 'react';
import Formulario from "../molecules/Formulario";
import ModalEliminar from './ModalEliminar';  // Asegúrate de importar correctamente tu componente ModalEliminar
import Swal from 'sweetalert2';

function SectionMotos() {
    const modalRef = useRef(null);
    const deleteModalRef = useRef(null);
    const [notification, setNotification] = useState('');
    const [currentPage, setCurrentPage] = useState('vehiculos');  // Definimos la página actual

    const openModal = () => {
        modalRef.current.showModal();
    };

    const closeModal = () => {
        modalRef.current.close();
    };

    const openDeleteModal = (page) => {
        setCurrentPage(page);  // Establecemos la página actual
        deleteModalRef.current.showModal();
    };

    const closeDeleteModal = () => {
        deleteModalRef.current.close();
    };

    const handleDelete = () => {
        closeDeleteModal();
        Swal.fire(
            'Eliminado',
            'El elemento ha sido eliminado exitosamente.',
            'success'
        );
        setNotification('Elemento eliminado exitosamente');
    };

    const handleCloseNotification = () => {
        setNotification('');
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="mb-4 text-4xl text-center text-stone-950">
                    <Label text="LISTO PARA TRABAJAR!" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Principal onClick={openModal} image={"Moto.png"} text="Añadir." />
                    <Principal image={"Moto.png"} text="Visualizar." />
                    <Principal image={"editarEditado.png"} text="Editar." />
                    <Principal onClick={() => openDeleteModal('vehiculos')} image={"eliminar.png"} text="Eliminar." />
                </div>

                <dialog ref={modalRef} className="border-4 border-black bg-azulIntegradorClaro">
                    <div>
                        <Formulario />
                        <div className="flex justify-center">
                            <button className="w-1/5 m-1 font-bold text-white bg-red-600 border p-7" onClick={closeModal}>Cerrar</button>
                            <button className="w-1/5 m-1 font-bold text-white bg-green-600 border p-7" onClick={closeModal}>Añadir</button>
                        </div>
                    </div>
                </dialog>

                <dialog ref={deleteModalRef} className="border-4 border-black bg-azulIntegradorClaro">
                    <div className="flex justify-center flex-col">
                        <ModalEliminar currentPage={currentPage} />
                        <button className="w-1/5 m-1 font-bold text-white bg-red-600 border p-4 w-full" onClick={closeDeleteModal}>Cerrar</button>
                        <button className="w-1/5 m-1 font-bold text-white bg-red-600 border p-4 w-full" onClick={handleDelete}>Eliminar</button>
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
