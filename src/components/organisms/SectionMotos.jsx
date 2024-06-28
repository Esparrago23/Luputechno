import Principal from "../molecules/Principal";
import Label from "../atoms/Label";
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Formulario from "../molecules/Formulario";
import FormularioResguardante from "../molecules/FormularioResguardante";
function SectionMotos(){

        const modalRef = useRef(null);

        const openModal = () => {
        modalRef.current.showModal();
        };
    
        const closeModal = () => {
        modalRef.current.close();
        };
    

    return(

            <>
        <div className="flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl text-center text-stone-950">
                <Label text="LISTO PARA TRABAJAR!" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Principal onClick={openModal} image={"Moto.png"} text="Añadir." />
                <Principal image={"Moto.png"} text="Visualizar." />
                <Principal image={"editarEditado.png"} text="Editar." />
                <Principal image={"eliminarEditado.png"} text="Eliminar." />
            </div>


            <dialog ref={modalRef} className="border-4 border-black bg-azulIntegradorClaro">
                <div>

            <Formulario></Formulario>
            <div className="flex justify-center ...">

            <button className="w-1/5 m-1 font-bold text-white bg-red-600 border p-7" onClick={closeModal}>Cerrar</button>
            <button className="w-1/5 m-1 font-bold text-white bg-green-600 border p-7" onClick={closeModal}>Añadir</button>
            
            </div>
                </div>
            </dialog>
            
            
        </div>



    </>
    )

}


export default SectionMotos;