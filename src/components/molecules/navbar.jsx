import { useNavigate } from "react-router-dom"
import Button from "../atoms/Button"
import Logo from "../atoms/Logo"

function  Navbar() {
    const navigate = useNavigate()

    const handlerClick = (e) => {
        navigate("/")
    }
    return(
        <div className="border-solid border-2 border-black bar  bg-cyan-400 flex place-content-between text-stone-100 font-mono text-3xl " >
            <div className="size-1/12">
            <Logo/>
            </div>
            <Button title="Resguardante"></Button>
            <Button title="Vehiculos"></Button>
            <Button title="Mantenimientos"></Button>
            <Button title="Bitacora"></Button>
            <Button title="Usuarios"></Button>
            <Button title="Cerrar Sesión" onClick={handlerClick}></Button>

            

        </div>
    )
} 
export default Navbar