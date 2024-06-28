import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Img from "../atoms/Img";
import Field from "../molecules/Field";





function SectionLogin() {
    const navigate = useNavigate()
    const handlerClick = (e) => {
        navigate("/Principal")
    }
    
    
    return(
        <div  className= "flex flex-col items-center justify-center w-[400px] h-[500px] space-y-8 bg-login-cyan rounded-2xl shadow-md "  >
            
            <div className="text-4xl font-semibold text-white" >
                <Label  text="Bienvenido"/>
            </div>
            <div className="w-40 h-40">
                <Img image={"Logo.png"} />
            </div >
           <div className="space-y-4 w-[300px]">
                <Field  text="" type="text" placeholder="Ingresa tu correo" value="" />
                <Field text="" type="password" placeholder="Ingresa tu contraseña" value=""/>
           </div>

           <div className=" w-[300px] block w-full px-3 py-2 mt-1 bg-white border rounded-full shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1">
                <Button title="Iniciar Sesión" onClick={handlerClick}/>
           </div>
          
        </div>
    );
}
export default SectionLogin;


// border-solid border-2 border-yellow-300 h-[100vh] flex justify-center items-center bg-cover
// flex flex-col justify-center items-center h-5/6 w-2/6  space-y-10