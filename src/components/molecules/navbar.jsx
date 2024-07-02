import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Select from "../atoms/Select"
import SelectNavbar from "../atoms/SelectNavbar";
function Navbar() {
  const navigate = useNavigate();

  const handlerClick = (e) => {
    navigate("/");
  };
  return (
    <div className="bg-azulIntegrador">
      <nav className="flex justify-center ...">
        <ul className="flex flex-row ... ">
          <li  className="m-5"><div><Button className="w-full py-1 rounded-lg bg-azulIntegradorClaro text-black font-bold  m-10" title={"Resguardante"}></Button></div></li>
          
          <li className="m-5"><SelectNavbar opcion5 = "Vehiculo" opcion1="Gasolina: Vehiculo" opcion2="Diesel: Vehiculo" opcion3="Motos: Vehiculo" opcion4="Comodatos: Vehiculo"></SelectNavbar></li>
          
        
          <li className="m-5"><Button className="w-full py-1 rounded-lg bg-azulIntegradorClaro text-black font-bold m-10" title={"Mantenimiento"}></Button></li>
          <li className="m-5"><Button className="w-full py-1 rounded-lg bg-azulIntegradorClaro text-black font-bold m-10" title={"Bitacora"}></Button></li>
          <li className="m-5"><Button className="w-full py-1 rounded-lg bg-azulIntegradorClaro text-black  font-bold m-10" title={"Usuario"}></Button></li>
          <li className="m-5"><Button className="w-full py-1 rounded-lg bg-azulIntegradorClaro text-black  font-bold m-10" title={"Usuario"}></Button></li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;