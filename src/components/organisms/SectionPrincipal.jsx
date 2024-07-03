import Label from "../atoms/Label"
import { useNavigate } from "react-router-dom"
import Principal from "../molecules/Principal"

function SectionPrincipal() {
    const navigate = useNavigate()
    const handlerClick = (e) => {
        navigate("/MenuVehiculos")
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl text-center text-stone-950">
                <Label text="LISTO PARA TRABAJAR!" />
            </div>
            <div className="flex space-x-8">
                <Principal onClick={handlerClick} image={"Vehiculos.png"} text="Vehiculos." />
                <Principal image={"Papel.png"} text="Mantenimientos." />
            </div>
        </div>    
    )
}

export default SectionPrincipal;
