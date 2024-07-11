import React from "react";
import Principal from "../molecules/Principal";
import Label from "../atoms/Label";
import { useNavigate } from "react-router-dom";

function SectionMenuVehiculos() {
    const navigate = useNavigate();
    const handlerClick = (e) => {
        navigate("/Vehicules");
    };

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="m-3 text-2xl text-center sm:text-3xl md:text-4xl text-stone-950">
            <Label
            className="m-2 font-semibold"
            text="LISTO PARA TRABAJAR EN VEHICULO!"
            />
        </div>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 font-semibold sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <Principal  className="font-semibold" image={"gasoline.svg"} text="Gasolina." />
            <Principal image={"gasolineBlack.svg"} text="Diesel." />
            <Principal
            onClick={handlerClick}
            image={"motorcycle.svg"}
            text="Motos."
            />
            <Principal image={"key.svg"} text="Comodatos." />
        </div>
        </div>
    );
}

export default SectionMenuVehiculos;
