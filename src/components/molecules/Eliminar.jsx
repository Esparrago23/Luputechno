import React from 'react';

const Eliminar = ({ title, type, placeholder, onInputChange }) => (
  <div>
    <h2>{title}</h2>
    <input
      type={type}
      placeholder={placeholder}
      onChange={onInputChange}
    />
  </div>
);

export default Eliminar;
