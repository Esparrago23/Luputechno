<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 445298277df5055225d8d15c1ac0832a807216f5

function SelectNavbar({ opcion1, opcion2, opcion3, opcion4, opcion5 }) {
    return (
        <div className="flex flex-row m-5 ">
<<<<<<< HEAD
    
        <select name="select" className="text-white font-extralight bg-azulIntegrador">
            
            <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50 " value="value1" selected>{opcion1}</option>
            
            <option className="p-5 m-4 text-white rounded-full font-extralight bg-w-50 p" value="value2">
            {opcion2}
            </option>
            <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50 p" value="value3">{opcion3}</option>
            <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50 p" value="value4">{opcion4}</option>
            <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50 p" value="value5" selected>{opcion5}</option>

            
=======
        <select
            name="select"
            className="h-15 px-2 py-1 text-sm text-black rounded-lg sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4
    h-15 p-3 m-2 w-30  font-bold  bg-azulIntegradorClaro"
        >
            <option
            className="p-5 m-4 font-bold text-black rounded-full  bg-azulIntegradorClaro w-50 "
            value="value1"
            selected
            >
            {opcion1}
            </option>

            <option
            className="p-5 m-4 font-bold text-black rounded-full  bg-azulIntegradorClaro w-50 p"
            value="value2"
            >
            {opcion2}
            </option>
            <option
            className="p-5 m-4 font-bold text-black rounded-full  bg-azulIntegradorClaro w-50 p"
            value="value3"
            >
            {opcion3}
            </option>
            <option
            className="p-5 m-4 font-bold text-black rounded-full  bg-azulIntegradorClaro w-50 p"
            value="value4"
            >
            {opcion4}
            </option>
            <option
            className="p-5 m-4 font-bold text-black rounded-full  bg-azulIntegradorClaro w-50 p"
            value="value5"
            selected
            >
            {opcion5}
            </option>
>>>>>>> 445298277df5055225d8d15c1ac0832a807216f5
        </select>
        </div>
    );
}

export default SelectNavbar;
