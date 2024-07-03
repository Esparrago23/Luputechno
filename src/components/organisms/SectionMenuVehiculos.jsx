import React from 'react'
import Principal from '../molecules/Principal'
import Label from '../atoms/Label'
import { useNavigate } from 'react-router-dom'


function SectionMenuVehiculos() {

    const navigate = useNavigate()
    const handlerClick = (e) => {
        navigate("/Vehicules")
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="m-3 text-4xl text-center text-stone-950">
                    <Label className="font-bold m-2" text="LISTO PARA TRABAJAR EN VEHICULO!" />
                </div>
            <div className="grid gap-5 grid-cols-2">
                    <Principal  image={"gasoline.svg"} text="Gasolina." />
                    <Principal image={"gasolineBlack.svg"} text="Diesel." />
                    <Principal onClick={handlerClick} image={"motorcycle.svg"} text="Motos." />
                    <Principal image={"data.svg"} text="Comodatos." />
                </div>
        </div>
    )
}

export default SectionMenuVehiculos
