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
            <div  className= "flex flex-col items-center justify-center w-[400px] h-[500px] space-y-8 bg-gradient-to-t from-blue-700 from-10% via-blue-300 to-sky-500 border border-black rounded-2xl shadow-md "  >
                
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

            <div className=" block px-3 py-2 m-3 bg-[#e1ecf4] rounded-[3px] border border-[#7aa7c7] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] box-border text-[#39739d] cursor-pointer inline-block font-sans text-[13px] font-normal leading-[1.15385] m-0 outline-none py-2 px-[0.8em] relative text-center no-underline select-none align-baseline whitespace-nowrap hover:bg-[#b3d3ea] hover:text-[#2c5777] focus:bg-[#b3d3ea] focus:text-[#2c5777] focus:shadow-[0_0_0_4px_rgba(0,149,255,0.15)] active:bg-[#a0c7e4] active:shadow-none active:text-[#2c5777] border rounded-full shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1">
                    <Button className={""} title="Iniciar Sesión" onClick={handlerClick}></Button>
            </div>
            
            </div>
    );
}
export default SectionLogin;


// border-solid border-2 border-yellow-300 h-[100vh] flex justify-center items-center bg-cover
// flex flex-col justify-center items-center h-5/6 w-2/6  space-y-10