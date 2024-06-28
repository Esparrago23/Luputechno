import React, { useEffect, useState } from 'react';
import TableCell from '../atoms/TableCell';
import TableRow from '../atoms/TableRow';

const Table = ({ apiEndpoint, columns }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL_API}/${apiEndpoint}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [apiEndpoint]);

  const filteredData = data.filter(item => 
    columns.some(column => item[column.accessor].toString().toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.accessor}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <TableRow key={index}>
              {columns.map(column => (
                <TableCell key={column.accessor}>
                  {item[column.accessor]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
