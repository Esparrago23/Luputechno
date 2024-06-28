import React from 'react'
import Label from './Label'
import Input from './Input'

function ElementoFormulario({type, placeholder, text, value}) {
    return (
        <div className='flex flex-row m-3 h-15'>
        <Label className = "p-5 m-2 font-bold text-white rounded-full  bg-azulIntegrador w-80 p" text={text}></Label>
        <Input type={type} placeholder={placeholder} value = {value}></Input>
        </div>
    )
}

export default ElementoFormulario
