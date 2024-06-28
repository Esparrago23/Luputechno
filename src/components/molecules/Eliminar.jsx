import Input from "../atoms/Input";
function Eliminar({ title, type, placeholder,onInputChange}) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <Input type={type} placeholder={placeholder} onChange={onInputChange}/>
      </div>
    </div>
  );
}

export default Eliminar;
