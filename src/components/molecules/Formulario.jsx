import React, { useState } from "react";
import Swal from 'sweetalert2';
import ElementoFormulario from '../atoms/ElementoFormulario';
import Button from "../atoms/Button";
import Select from "../atoms/Select";

function Formulario() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleAddResguardante = () => {
        // Simulación de llamada a la API
        console.log("Resguardante agregado");

        // Mostrar notificación
        Swal.fire({
            title: '¡Éxito!',
            text: 'Resguardante agregado correctamente.',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        closeModal();
    };
    const{handlerOnchange} = (e)=>{
        const newvalue = e.target.value
    console.log(newvalue)
    setInputValue(newvalue);
    }

    return (
        <div  className="flex flex-col m-5 bg-azulIntegradorClaro"> 
            <ElementoFormulario
                text="No. Economico Vehiculo"
                placeholder="No. Economico Vehiculo"
                type="text"
                onInputChange={handlerOnchange}
            />

            <div className="flex flex-row">
                <div className="flex flex-col">
                    <ElementoFormulario
                        text="No. Serie"
                        placeholder="No. Serie"
                        type="text"
                    />
                    <ElementoFormulario
                        text="No. Economico"
                        placeholder="No. Economico"
                        type="text"
                    />
                    <ElementoFormulario
                        text="Marca"
                        placeholder="Marca"
                        type="text"
                    />
                    <div className="flex justify-center font-bold text-black">
                        <h1 className="p-5 m-2 font-bold text-white rounded-full bg-azulIntegrador w-80">
                            Cantidad De Filtros:
                        </h1>
                        <form className="flex">
                            <div className="flex flex-row align-middle">
                                <div className="m-5">
                                    <label htmlFor="Gasolina">Gasolina</label>
                                    <input type="checkbox" id="gasolina" name="Gasolina" value="Gasolina" />
                                </div>
                                <div className="m-5">
                                    <label htmlFor="Aceite">Aceite</label>
                                    <input type="checkbox" id="aceite" name="Aceite" value="Aceite" />
                                </div>
                                <div className="m-5">
                                    <label htmlFor="Aire">Aire</label>
                                    <input type="checkbox" id="aire" name="Aire" value="Aire" />
                                </div>
                                <div className="m-5">
                                    <label htmlFor="Todos">Todos</label>
                                    <input type="checkbox" id="todos" name="Todos" value="Todos" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <ElementoFormulario
                        text="Num. motor"
                        placeholder="Num. motor"
                        type="text"
                    />
                    <Button
                        className="p-5 m-2 font-bold text-white rounded-full bg-azulIntegrador w-80"
                        title="Resguardante"
                        onClick={openModal}
                    />
                </div>

                <div className="flex flex-col">
                    <ElementoFormulario
                        text="No. serie"
                        placeholder="No. serie"
                        type="text"
                    />
                    <ElementoFormulario
                        text="Placas"
                        placeholder="Placas"
                        type="text"
                    />
                    <Select
                        text="Estatus"
                        opcion1="Usado"
                        opcion2="Robado"
                        opcion3="Nuevo"
                    />
                    <ElementoFormulario
                        text="Cantidad de Bujias"
                        placeholder="Cantidad de Bujias"
                        type="number"
                    />
                    <ElementoFormulario
                        text="Costo Vehiculo"
                        placeholder="Costo Vehiculo"
                        type="number"
                    />
                </div>
            </div>

            <dialog open={isModalOpen} className="border-4 border-black bg-azulIntegradorClaro">
                <div className="flex flex-col">
                    <div className="flex justify-center font-sans text-lg">
                        <h1>Ingrese Los Datos</h1>
                    </div>
                    <ElementoFormulario text="Curp" placeholder="Curp" type="text" />
                    <ElementoFormulario text="Nombre" placeholder="Nombre" type="text" />
                    <ElementoFormulario text="Fecha Resguardo" placeholder="Fecha Resguardo" type="text" />
                    <ElementoFormulario text="Fecha Exp. Licencia" placeholder="Fecha Exp. Licencia" type="text" />
                    <ElementoFormulario text="Area De Trabajo" placeholder="Area De Trabajo" type="text" />
                </div>
                <div className="flex justify-center">
                    <button
                        className="w-1/4 m-1 font-bold text-white bg-green-600 border p-7"
                        onClick={handleAddResguardante}
                    >
                        Añadir
                    </button>
                </div>
            </dialog>
        </div>
    );
}

export default Formulario;
