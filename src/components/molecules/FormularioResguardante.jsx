import ElementoFormulario from "../atoms/ElementoFormulario";

function FormularioResguardante() {
    return (
        <>
        <div className="flex flex-col">
            <div className="flex justify-center font-sans text-lg ">
            <h1>Ingrese Los Datos</h1>
            </div>
            <ElementoFormulario text="Curp" placeholder="Curp" type="text" />
            <ElementoFormulario text="Nombre" placeholder="Nombre" type="text" />
            <ElementoFormulario
            text="Fecha Resguardo"
            placeholder="Fecha Resguardo"
            type="text"
            />

            <ElementoFormulario
            text="Fecha Exp. Licencia"
            placeholder="Fecha Exp. Licencia"
            type="text"
            />
            <ElementoFormulario
            text="Area De Trabajo"
            placeholder="Area De Trabajo"
            type="text"
            />
        </div>
        <div className="flex justify-center">
            <button
            className="w-1/4 m-1 font-bold text-white bg-green-600 border p-7 "
            onClick={closeModal}
            >
            Añadir
            </button>
        </div>
        </>
    );
}

export default FormularioResguardante;
