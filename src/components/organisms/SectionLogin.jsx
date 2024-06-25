import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Logo from "../atoms/Logo";
import Field from "../molecules/Field";

function SectionLogin() {
    const navigate = useNavigate()
    const handlerClick = (e) => {
        navigate("/Principal")
    }
    return(
        <div  className= " border-solid border-2 border-black bar rounded-3xl	 bg-cyan-400 flex flex-col items-center  justify-center space-y-9 " >
            
            <div className=" text-stone-100 font-mono text-7xl  flex items-center  justify-center " >
                <Label  text="Bienvenido"/>
            </div>

            <div className="w-2/6">
                <Logo />
            </div >
           <div className=" space-y-9  ">
                <Field  text="" type="text" placeholder="Ingresa tu correo" value="" />
                <Field text="" type="password" placeholder="Ingresa tu contraseña" value=""/>
           </div>
           <div className=" ">
                <Button title="Iniciar Sesión" onClick={handlerClick}/>
           </div>
           
        </div>
    );
}
export default SectionLogin;

// border-solid border-2 border-yellow-300 h-[100vh] flex justify-center items-center bg-cover
// flex flex-col justify-center items-center h-5/6 w-2/6  space-y-10