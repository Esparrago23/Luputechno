import Eliminar from '../molecules/Eliminar';
import Button from '../atoms/Button';
import Swal from 'sweetalert2';
import { useState } from 'react';

const ModalEliminar = ({ currentPage }) => {
  const [inputValue, setInputValue] = useState('');

  let title = '';
  let placeholder = '';
  let apiEndpoint = '';

  switch (currentPage) {
    case 'resguardante':
      title = 'Eliminar Resguardante';
      placeholder = 'Ingrese la curp del Resguardante';
      apiEndpoint = 'resguardantes';
      break;
    case 'vehiculos':
      title = 'Eliminar Vehículos';
      placeholder = 'Ingrese el no. Económico del Vehículo';
      apiEndpoint = 'vehiculos';
      break;
    case 'mantenimiento':
      title = 'Eliminar Mantenimiento';
      placeholder = 'Ingrese el no. Serie';
      apiEndpoint = 'mantenimientos';
      break;
    case 'usuarios':
      title = 'Eliminar Usuarios';
      placeholder = 'Ingrese el nombre del Usuario';
      apiEndpoint = 'usuarios';
      break;
    default:
      break;
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEliminarClick = () => {
    Swal.fire({
      title: 'Confirmación',
      text: '¿Estás seguro de que deseas eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_URL_API}/${apiEndpoint}/${inputValue}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(response => {
          if (response.ok) {
            Swal.fire(
              'Eliminado',
              'El elemento ha sido eliminado.',
              'success'
            );
          } else {
            return response.json().then(errorData => {
              Swal.fire(
                'Error',
                `Hubo un problema al eliminar el elemento: ${errorData.message || response.statusText}`,
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
        <Eliminar title={title} type="text" placeholder={placeholder} onInputChange={handleInputChange} />
      </div>
      <div>
        <Button onClick={handleEliminarClick}>Eliminar</Button>
      </div>
    </div>
  );
};

export default ModalEliminar;
