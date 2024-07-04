import Label from "../atoms/Label"
import { useNavigate } from "react-router-dom"
import Principal from "../molecules/Principal"

function SectionPrincipal() {
    const navigate = useNavigate()
    const handlerClick = (e) => {
        navigate("/MenuVehiculos")
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 w-full min-h-screen">
    <div className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-stone-950">
        <Label text="LISTO PARA TRABAJAR!" />
    </div>
    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 md:space-x-8 w-full justify-center">
        <Principal className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" onClick={handlerClick} image={"Vehiculos.png"} text="Vehiculos." />
        <Principal className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" image={"Papel.png"} text="Mantenimientos." />
    </div>
</div>

    
    )
}

export default SectionPrincipal;
