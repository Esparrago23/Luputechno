import Input from "../atoms/Input";
import Label from "../atoms/Label";
function Eliminar({ title, type, placeholder,onInputChange}) {
  return (
    <div>
      <div>
        <Label>{title}</Label>
      </div>
      <div>
        <Input type={type} placeholder={placeholder} onChange={onInputChange}/>
      </div>
    </div>
  );
}

export default Eliminar;
