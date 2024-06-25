import Button from "../atoms/Button"
import Logo from "../atoms/Logo"

function  Navbar() {
    return(
        <div className=" w-full border-solid border-2 border-black bar rounded-3xl	 bg-cyan-400 ">
            <Logo/>
            <Button title="Resguardante"></Button>
            <Button title="Vehiculos"></Button>
            <Button title="Mantenimientos"></Button>
            <Button title="Bitacora"></Button>
            <Button title="Usuarios"></Button>
            <Button title="Cerrar Sesión"></Button>

            

        </div>
    )
} 
export default Navbar