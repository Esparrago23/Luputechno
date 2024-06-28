
import Table from '../molecules/Table';

const VehiclesView = () => {
  const columns = [
    { Header: 'No. Serie', accessor: 'noSerie' },
    { Header: 'Marca', accessor: 'marca' },
    { Header: 'Placas', accessor: 'placas' },
    { Header: 'No. Motor', accessor: 'noMotor' },
    { Header: 'No. Económico', accessor: 'noEconomico' },
    { Header: 'Costo Vehículo', accessor: 'costoVehiculo' },
    { Header: 'Resguardante', accessor: 'resguardante' },
    { Header: 'Estatus', accessor: 'estatus' }
  ];

  return (
    <div>
      <h1>Vehículos</h1>
      <Table apiEndpoint="vehiculos" columns={columns} />
    </div>
  );
};

export default VehiclesView;
