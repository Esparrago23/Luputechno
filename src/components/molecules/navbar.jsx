import { useNavigate } from "react-router-dom";
import Img from "../atoms/Img";
import Button_icons from "../atoms/Button_icons";

function Navbar() {
  const navigate = useNavigate();

  const handlerClick = (e) => {
    navigate("/");
  };
  return (
    <div>
      <nav className="flex justify-center font-bold text-white bg-azulIntegrador">
        <ul className="flex flex-row">
          <li className="m-1">
            <Button_icons>
              <Img src="Logo"alt=""/>
            </Button_icons>
          </li>
          <li className="m-10">
            <Button_icons>Resguardante</Button_icons>
          </li>
          <li className="m-10">
            <Button_icons>Vehiculos</Button_icons>
          </li>
          <li className="m-10">
            <Button_icons>Mantenimiento</Button_icons>
          </li>
          <li className="m-10">
            <Button_icons>Bitacora</Button_icons>
          </li>
          <li className="m-10">
            <Button_icons>Usuarios</Button_icons>
          </li>
          <li className="m-10">
            <Button_icons onClick={handlerClick}>
              <Img src="Cerrar sesion.png" alt="" />
            </Button_icons>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
