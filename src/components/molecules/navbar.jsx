import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import VehicleDropdown from "../molecules/VehicleDropdown";

function Navbar() {
  const navigate = useNavigate();

  const handlerClick = (route) => {
    navigate(route);
  };

  return (
    <div className="bg-azulIntegrador">
      <nav className="flex justify-center">
        <ul className="flex flex-row">
          <li><Button className="w-full py-1 m-10 font-bold text-white" title={"Resguardante"} ></Button></li>
          <li><VehicleDropdown /></li>
          <li><Button className="w-full py-1 m-10 font-bold text-white" title={"Mantenimiento"} ></Button></li>
          <li><Button className="w-full py-1 m-10 font-bold text-white" title={"Bitacora"} ></Button></li>
          <li><Button className="w-full py-1 m-10 font-bold text-white" title={"Usuario"}></Button></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

