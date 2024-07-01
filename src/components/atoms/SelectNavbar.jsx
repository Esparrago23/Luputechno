import React from "react";
import Label from "./Label";

function SelectNavbar({opcion1,opcion2,opcion3, opcion4, opcion5}) {
    return (
        <div className="flex flex-row m-5 ">
    
        <select name="select" className="p-5 m-2 rounded-lg font-bold text-black w-80 bg-azulIntegradorClaro p">
            
            <option className="p-5 m-4 font-bold text-black rounded-full  bg-azulIntegradorClaro w-80 " value="value1" selected>{opcion1}</option>
            
            <option className="p-5 m-4 font-bold text-black rounded-full  bg-azulIntegradorClaro w-80 p" value="value2">
            {opcion2}
            </option>
            <option className="p-5 m-4 font-bold text-black rounded-full  bg-azulIntegradorClaro w-80 p" value="value3">{opcion3}</option>
            <option className="p-5 m-4 font-bold text-black rounded-full  bg-azulIntegradorClaro w-80 p" value="value4">{opcion4}</option>
            <option className="p-5 m-4 font-bold text-black rounded-full  bg-azulIntegradorClaro w-80 p" value="value5" selected>{opcion5}</option>

            
        </select>
        </div>
        
    )
}

export default SelectNavbar
