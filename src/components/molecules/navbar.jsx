import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import SelectNavbar from "../atoms/SelectNavbar";
import Img from "../atoms/Img";
import Button_icons from "../atoms/Button_icons";

function Navbar() {
  const navigate = useNavigate();

  const handlerClick = (e) => {
    navigate("/");
  };

  return (

    <>
    <div className="bg-azulIntegrador">
  <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-4 sm:px-6 md:px-8">
    <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 w-full justify-between">
      <li className="m-2 sm:m-5">
        <Button
          className="py-2 px-4 sm:px-6 rounded-lg bg-azulIntegradorClaro text-black font-bold"
          title={"Resguardante"}
        />
      </li>
      <li className="m-2 sm:m-5">
        <SelectNavbar
          opcion5="Vehiculo"
          opcion1="Gasolina: Vehiculo"
          opcion2="Diesel: Vehiculo"
          opcion3="Motos: Vehiculo"
          opcion4="Comodatos: Vehiculo"
        />
      </li>
      <li className="m-2 sm:m-5">
        <Button
          className="py-2 px-4 sm:px-6 rounded-lg bg-azulIntegradorClaro text-black font-bold"
          title={"Mantenimiento"}
        />
      </li>
      <li className="m-2 sm:m-5">
        <Button
          className="py-2 px-4 sm:px-6 rounded-lg bg-azulIntegradorClaro text-black font-bold"
          title={"Bitacora"}
        />
      </li>
      <li className="m-2 sm:m-5">
        <Button
          className="py-2 px-4 sm:px-6 rounded-lg bg-azulIntegradorClaro text-black font-bold"
          title={"Usuario"}
        />
      </li>
      <li>
        <Button_icons>
          <Img image ="/CerrarSesion.png"></Img>
        </Button_icons>
      </li>
    </ul>
  </nav>
</div>

</>
  );
}

export default Navbar;
