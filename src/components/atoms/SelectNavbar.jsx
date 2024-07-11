
function SelectNavbar({opcion1,opcion2,opcion3, opcion4, opcion5}) {
    return (
        <div className="flex flex-row m-5 ">
    
        <select name="select" className="text-white font-extralight bg-azulIntegrador">
            
            <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50 " value="value1" selected>{opcion1}</option>
            
            <option className="p-5 m-4 text-white rounded-full font-extralight bg-w-50 p" value="value2">
            {opcion2}
            </option>
            <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50 p" value="value3">{opcion3}</option>
            <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50 p" value="value4">{opcion4}</option>
            <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50 p" value="value5" selected>{opcion5}</option>

            
        </select>
        </div>
        
    )
}

export default SelectNavbar
