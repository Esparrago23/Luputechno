import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

function Navbar() {
  const navigate = useNavigate();

  const handlerClick = (e) => {
    navigate("/");
  };
  return (
    <div className="bg-azulIntegrador">
      <nav className="flex justify-center ...">
        <ul className="flex flex-row ...">
          <li><Button className="w-full py-1 text-white font-bold m-10" title={"Reguardante"}></Button></li>
          <li><Button className="w-full py-1 text-white font-bold m-10" title={"Vehiculos"}></Button></li>
          <li><Button className="w-full py-1 text-white font-bold m-10" title={"Mantenimiento"}></Button></li>
          <li><Button className="w-full py-1 text-white font-bold m-10" title={"Bitacora"}></Button></li>
          <li><Button className="w-full py-1 text-white font-bold m-10" title={"Usuario"}></Button></li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;