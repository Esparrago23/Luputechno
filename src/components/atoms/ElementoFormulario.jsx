import React from 'react'
import Label from './Label'
import Input from './Input'

function ElementoFormulario({type, placeholder, text, value}) {
    return (
        <div className='flex flex-row m-3 h-15'>
        <Label className = "m-2 font-bold  bg-azulIntegrador rounded-full p-5 w-80  text-white" text={text}></Label>
        <Input type={type} placeholder={placeholder} value = {value}></Input>
        </div>
    )
}

export default ElementoFormulario



//? GG