import React from "react";

function SelectNavbar({ opcion1, opcion2, opcion3, opcion4, opcion5 }) {
    return (
        <div className="flex flex-row m-5 ">
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
        </select>
        </div>
    );
}

export default SelectNavbar;
