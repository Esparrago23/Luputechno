import React from 'react'
import Label from './Label'
import Input from './Input'

function ElementoFormulario({type, placeholder, text, value,onInputChange}) {
    return (
        <div className='flex flex-row m-3 h-15'>
        <Label className = "m-2 font-bold  bg-azulIntegrador rounded-full p-5 w-80  text-white p" text={text}></Label>
        <Input type={type} placeholder={placeholder} value = {value} onChange={onInputChange}></Input>
        </div>
    )
}

export default ElementoFormulario