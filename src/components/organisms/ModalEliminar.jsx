import React, { useState,useRef } from 'react';
import Eliminar from '../molecules/Eliminar';
import Button from '../atoms/Button';
import Swal from 'sweetalert2';

const ModalEliminar = ({ currentPage }) => {
  const deleteModalRef = useRef(null);
  
  const [inputValue, setInputValue] = useState('');

  let title = '';
  let placeholder = '';
  let apiEndpoint = '';

  switch (currentPage) {
    case 'resguardante':
      title = 'Eliminar Resguardante';
      placeholder = 'Ingrese la curp del Resguardante';
      apiEndpoint = 'Resguardantes';
      break;
    case 'vehiculos':
      title = 'Eliminar Vehículos';
      placeholder = 'Ingrese el no. Económico del Vehículo';
      apiEndpoint = 'Vehiculos';
      break;
    case 'mantenimiento':
      title = 'Eliminar Mantenimiento';
      placeholder = 'Ingrese el no. Serie';
      apiEndpoint = 'Mantenimientos';
      break;
    case 'usuarios':
      title = 'Eliminar Usuarios';
      placeholder = 'Ingrese el nombre del Usuario';
      apiEndpoint = 'Usuarios';
      break;
    default:
      break;
  }
  const closeDeleteModal = () => {
    deleteModalRef.current.close();
  };

  const handleInputChange = (e) => {
    const newvalue = e.target.value
    console.log(newvalue)
    setInputValue(newvalue);

  };

  const handleEliminarClick = () => {
 
    if (!inputValue) {
      Swal.fire(
        'Error',
        'Por favor ingrese un valor antes de eliminar.',
        'warning'
      );
      return;
    }

    Swal.fire({
      title: 'Confirmación',
      text: '¿Estás seguro de que deseas eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_URL_API}/${apiEndpoint}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body:JSON.stringify({
              'NumeroEconomico':inputValue
          })
        })
        .then(response => {
          if (response.ok) {
            Swal.fire(
              'Eliminado',
              'El elemento ha sido eliminado.',
              'success'
            );
          } else {
            response.json().then(errorData => {
              Swal.fire(
                'Error',
                `Hubo un problema al eliminar el elemento: ${errorData.message || response.statusText}`,
                'error'
              );
            }).catch(() => {
              Swal.fire(
                'Error',
                'Hubo un problema al eliminar el elemento y no se pudo obtener más detalles.',
                'error'
              );
            });
          }
        })
        .catch(error => {
          console.error('Error al eliminar:', error);
          Swal.fire(
            'Error',
            'Hubo un problema al eliminar el elemento.',
            'error'
          );
        });
      }
    });
  };

  return (
    <div>
      <div>
        <p>Buscar</p>
      </div>
      <div>
        <Eliminar title={title} type="text" placeholder={placeholder} onInputChange={handleInputChange} value={inputValue} />
      </div>
      <div >
        <Button  className="w-full sm:w-1/3 font-bold text-white bg-red-600 rounded-lg p-2" onClick={handleEliminarClick} title="asd"></Button>
      </div>
    </div>
  );
};

export default ModalEliminar;
