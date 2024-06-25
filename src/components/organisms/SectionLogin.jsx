import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Logo from "../atoms/Logo";
import Field from "../molecules/Field";

function SectionLogin() {
    return(
        <div  className= " border-solid border-2 border-black bar rounded-3xl	 bg-cyan-400   flex flex-col justify-center items-center h-4/6 w-2/6  space-y-10" >
            
            <div className="h-1/6 w-full text-stone-100 font-mono text-7xl  flex items-center  justify-center " >
                <Label  text="Bienvenido"/>
            </div>

            <div className=" w-2/6  ">
                <Logo />
            </div >

           <div className="h-1/6  space-y-9  ">
                <Field  text="" type="text" placeholder="Ingresa tu correo" value="" />
                <Field text="" type="password" placeholder="Ingresa tu contraseña" value=""/>
           </div>
           <div className="h-1/6 ">
                <Button title="Iniciar Sesión"/>
           </div>
           
        </div>
    );
}
export default SectionLogin;

// border-solid border-2 border-yellow-300 h-[100vh] flex justify-center items-center bg-cover