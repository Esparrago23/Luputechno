import React from "react";
import Label from "./Label";

function Select({opcion1,opcion2,opcion3, text}) {
    return (
        <>
        <div className="flex flex-row m-3 h-15">
            <Label className="p-5 m-2 font-bold text-white rounded-full  bg-azulIntegrador w-80 p" text={text} ></Label>
        <select name="select" className="p-5 m-2 font-bold text-white rounded-full bg-azulIntegrador w-80 p">
            <option className="p-5 m-2 font-bold text-white rounded-full  hover:bg-azulIntegrador w-80 p" value="value1">{opcion1}</option>
            <option className="p-5 m-2 font-bold text-white rounded-full  hover:bg-azulIntegrador w-80 p" value="value2" selected>
            {opcion2}
            </option>
            <option className="p-5 m-2 font-bold text-white rounded-full  hover:bg-azulIntegrador w-80 p" value="value3">{opcion3}</option>

            
        </select>
        </div>
        </>
    );
}

export default Select;