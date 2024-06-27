import Navbar from "../molecules/navbar"
import Label from "../atoms/Label"
import Principal from "../molecules/Principal"

function SectionPrincipal() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl text-center text-stone-950">
                <Label text="LISTO PARA TRABAJAR!" />
            </div>
            <div className="flex space-x-8">
                <Principal image={"Vehiculos.png"} text="Vehiculos." />
                <Principal image={"Papel.png"} text="Mantenimientos." />
            </div>
        </div>    
    )
}
export default SectionPrincipal;