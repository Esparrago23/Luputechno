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
    <div className="bg-azulIntegrador">
      <nav className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <ul className="flex flex-col items-center justify-between w-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-8">
          <li>
            <Button_icons className="p-2 m-2 sm:p-4 md:p-6 lg:p-8">
              <Img image="/Logo.png" alt="Logo" />
            </Button_icons>
          </li>
          <li className="m-2 sm:m-5">
            <Button
              className="px-2 py-1 text-sm font-bold text-black rounded-lg sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-azulIntegradorClaro"
              title="Resguardante"
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
              className="px-2 py-1 text-sm font-bold text-black rounded-lg sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-azulIntegradorClaro"
              title="Mantenimiento"
            />
          </li>
          <li className="m-2 sm:m-5">
            <Button
              className="px-2 py-1 text-sm font-bold text-black rounded-lg sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-azulIntegradorClaro"
              title="Bitacora"
            />
          </li>
          <li className="m-2 sm:m-5">
            <Button
              className="px-2 py-1 text-sm font-bold text-black rounded-lg sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-azulIntegradorClaro"
              title="Usuario"
            />
          </li>
          <li>
            <Button_icons className="p-2 m-2 sm:p-4 md:p-6 lg:p-8">
              <Img image="/CerrarSesion.png" alt="Cerrar Sesión" />
            </Button_icons>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
