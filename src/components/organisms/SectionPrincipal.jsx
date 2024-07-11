import Label from "../atoms/Label"
import { useNavigate } from "react-router-dom"
import Principal from "../molecules/Principal"

function SectionPrincipal() {
    const navigate = useNavigate()
    const handlerClick = (e) => {
        navigate("/MenuVehiculos")
    }

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 space-y-16 bg-green-700 sm:p-6 md:p-8 lg:p-12">
    <div className="text-xl font-semibold text-center bg-red-600 sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
        <Label text="LISTO PARA TRABAJAR!" />
    </div>
    <div className="flex flex-col justify-center w-full text-xl font-semibold bg-yellow-500 sm:space-y-0 sm:flex-row sm:space-x-4 md:space-x-8">
        <Principal className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" onClick={handlerClick} image={"Vehiculos.png"} text="Vehiculos." />
        <Principal className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" image={"Papel.png"} text="Mantenimientos." />
    </div>
</div>

    
    )
}

export default SectionPrincipal;
