import React from 'react';
import Input from '../atoms/Input'

const Eliminar = ({ title, type, placeholder, onInputChange }) => (
  <div>
    <h2>{title}</h2>
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onInputChange}
    />
  </div>
);

export default Eliminar;
